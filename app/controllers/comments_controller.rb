class CommentsController < ApplicationController

  before_action :find_post, only: [:create]
  before_action :find_comment, only: [:upvote, :destroy]

  def create
    comment = @post.comments.create(comment_params)
    respond_with @post, comment
  end

  def upvote
    @comment.inc(upvotes: 1)
    render json: @comment
  end

  def destroy
    @comment.destroy
    render nothing: true, status: :ok
  end

  private

  def find_post
    @post = Post.find(params[:post_id])
  end

  def find_comment
    find_post
    @comment = @post.comments.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:author, :body)
  end
end
