class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user && user.valid?
            session[:user_id] = user.id #Logging a user
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
        end
        
    end

    def show
        if session[:user_id] # session => {user_id: 1}
            user = User.find(session[:user_id])
            render json: user, status: :created
        else
            render json: { errors: ["Must be logged in"]}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end