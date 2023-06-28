Rails.application.routes.draw do
  resources :blog_tags
  resources :tags
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :blogs
  
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  post "/toggle-like", to: "likes#toggle_like"
end
