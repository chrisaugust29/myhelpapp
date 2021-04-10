class Api::BusinessesController < ApplicationController

    before_action :require_logged_in, only: [:create, :update]

    def create
        @business = Business.new(business_params)
        if business.save  
            render "api/businesses/show" 
        else
             render json: @business.errors.full_messages, status: 422
        end

    end

    def index
        @businesses = Business.all
        render "api/businesses/index" 
    end

    def show 
        @business = Business.find(params[:id])
        render "api/businesses/show"
    end

    def update
        @business = Business.find_by(id: params[:id])
        if @business.update(business_params)
            render "/api/businesses/show"
        else
            render json: @business.errors.full_messages, status: 422
        end
    end
                
    private

    def business_params
        params.require(:user).permit( :name, :category, :street, :city, :state, :phone_number, :price)
    end
    
end
