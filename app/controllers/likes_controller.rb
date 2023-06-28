class LikesController < ApplicationController
    def toggle_like
        like = Like.find_by(like_params)
        if like
            like.destroy
            render json: {message: "Un-liking"}
        else 
            new_like = Like.create!(like_params)            
            render json: {message: "Liking", like_id: new_like.id}
        end
    end

    private 

    def like_params
      params.permit(:user_id, :blog_id)
    end
end
