Rails.application.routes.draw do
  resources :tasks, except: [:new, :edit]
  devise_for :users
  root 'welcome#index'
end
