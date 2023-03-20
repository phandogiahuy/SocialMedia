import { user } from '../models/User.js';
import { post } from '../models/Post.js';
class PostController {
  //create post
  async create(req, res) {
    const newPost = new post(req.body);
    newPost.userId = req.params.id;
    console.log(newPost);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //update post
  async update(req, res) {
    try {
      const Post = await post.findById(req.params.id);
      if (Post.userId === req.body.userId) {
        await Post.updateOne({ $set: req.body });
        res.status(200).json('the post has been update');
      } else {
        res.status(403).json("you can't update post since user dont match");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //delete post
  async delete(req, res) {
    try {
      const Post = await post.findById(req.params.id);
      if (Post.userId === req.body.userId) {
        await Post.deleteOne();
        res.status(200).json('the post has been delete');
      } else {
        res.status(403).json("you can't delete post since user dont match");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //like, unlike
  async react(req, res) {
    try {
      const Post = await post.findById(req.params.id);
      if (!Post.like.includes(req.body.userId)) {
        await Post.updateOne({ $push: { like: req.body.userId } });
        res.status(200).json('The post has been liked');
      } else {
        await Post.updateOne({ $pull: { like: req.body.userId } });
        res.status(200).json('The post has been unliked');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //get post
  async post(req, res) {
    try {
      const Post = await post.findById(req.params.id);
      res.status(200).json(Post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //get all post
  async allpost(req, res) {
    try {
      const currentUser = await user.findById(req.body.userId);
      const UserPost = await post.find({ userId: currentUser.id });
      const friendPost = await Promise.all(
        currentUser.following.map((friendId) => {
          return post.find({ userId: friendId });
        }),
      );
      res.json(UserPost.concat(...friendPost)).render('home', { UserPost, friendPost });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export var postController = new PostController();
