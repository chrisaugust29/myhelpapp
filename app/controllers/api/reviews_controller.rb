class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_signed_in!

    def index
        @reviews =Review.all
    end

    def create  
        @review = Review.new(review_params)
        @review.author_id = current_user.id

        if @review.save
        render :show
        else
        render json: @review, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
        render :show
        else
        render json: ["You are not a permitted Helper and cannot update review!"]
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy && @review
            render :show
        else
            render json: ["Review cannot be deleted"], status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:body, :rating, :business_id)
    end

end

