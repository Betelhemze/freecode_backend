import {Post} from "../models/postModel.js"

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res
        .status(400)
        .json({ message: "please fill in all required fields" });
    }
    const newPost = new Post({ name, description, age });
    await newPost.save();
    return res
      .status(201)
      .json({ message: "post created successfully!", post: newPost });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const getPosts = async (req,res) => {
    try {
        const getPosts = await Post.find();
        return res.status(200).json({message: "posts retrieved successfully", posts: getPosts})
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Internal server error", error: error.message });

    }
};
const updatePost = async (req,res) =>{
    try{
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({message: "please fill in all required fields"})
        }

        const post = await Post.findById(req.params.id, req.body, {new: true})
        if (!post){
            return res.status(404).json({message: "post not found"})
        }
        return res.status(200).json({message: "post updated successfully", post})

    }catch (error){
        return res.status(500).json({message: "internal server error"})
    }
};
const deletePost = async (req,res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id, req.body, {new: true})
        if (!post){
            return res.status(404).json({message: "post not found"})
        }
        return res.status(200).json({message: "post deleted successfully", post})
    }catch (error) {
        return res.status(500).json({message: "internal server error"})
    }
}

export { createPost, getPosts, updatePost, deletePost };