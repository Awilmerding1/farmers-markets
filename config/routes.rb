Rails.application.routes.draw do
  scope '/api' do
      resources :farmers_markets
      resources :grocery_items
    end
end
