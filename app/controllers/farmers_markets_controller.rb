require 'pry'
class FarmersMarketsController < ApplicationController

  def index
    q = params[:q]

    if q === nil
      render status: 200, json: FarmersMarket.all
    else
        render(
          status: 200,
          json: FarmersMarket.where("zipcode = ?", params[:q])
      )
    end
  end

  def create
    market = FarmersMarket.create(market_params)
  end

  def market_params
    params.require(:farmers_market).permit(:facilityname, :address, :borough, :zipcode, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday)
  end


end
