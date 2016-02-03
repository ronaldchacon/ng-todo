Rails.application.routes.draw do
  resources :tasks, except: [:new, :edit], defaults: { format: 'json' }
  devise_for :users
  root 'welcome#index'
end
