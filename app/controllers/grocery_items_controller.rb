require 'pry'
class GroceryItemsController < ApplicationController

  def index
    render(
      status: 200,
      json: GroceryItem.all
  )
  end

  def create
    item = GroceryItem.create(item_params)

  end

  def destroy
    item = GroceryItem.find(params[:id])
    GroceryItem.destroy(params[:id])
  end

  def item_params
    params.require(:grocery_item).permit(:farmers_market_id, :description)
  end


end
