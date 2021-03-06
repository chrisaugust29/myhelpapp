Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :businesses, only: [:create, :index, :show, :update]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"


end
