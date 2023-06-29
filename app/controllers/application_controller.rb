class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :check_logged_in_user

    def check_logged_in_user
      @current_user = User.find_by(id: session[:user_id])
      if !@current_user
        render json: { errors: ["Must be logged in"] }, status: :unauthorized
      end
    end
    
    def render_unprocessable(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found(exception)
      render json: {errors: exception.message}, status: :not_found
    end
  end
