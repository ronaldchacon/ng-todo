Rails.application.routes.draw do
  resources :tasks, except: [:new, :edit], defaults: { format: 'json' } do
    put 'delete_all', on: :collection
  end
  devise_for :users
  root 'welcome#index'
end
