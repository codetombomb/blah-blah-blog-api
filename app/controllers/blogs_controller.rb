class BlogsController < ApplicationController

  def index
    blogs = Blog.all
    render json: blogs
  end

  def create
    blog = Blog.create!(blog_params)
    render json: blog
  end

  def show  
    blog = Blog.find(params[:id])
    render json: blog
  end

  def update
    blog = Blog.find(params[:blog_id])
    blog.update(blog_params)
    render json: blog_params
  end

  def destroy
    blog = Blog.find(params[:blog_id])
    blog.destroy
    head :no_content
  end

  private 

  def blog_params
    params.permit(:user_id, :title, :tags, :content)
  end
end
