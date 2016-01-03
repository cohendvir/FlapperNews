class PostsController < ApplicationController

  before_action :find_post, only: [:show, :upvote, :destroy]

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
    respond_with @post
  end

  def destroy
    @post.destroy
    render nothing: true, status: :ok
  end

  def upvote
    @post.increment!(:upvotes)
    render json: @post
  end

  private

  def find_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:link, :title)
  end
end
