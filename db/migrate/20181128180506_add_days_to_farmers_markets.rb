class AddDaysToFarmersMarkets < ActiveRecord::Migration[5.2]
  def change
    add_column :farmers_markets, :monday, :string, default: ""
    add_column :farmers_markets, :tuesday, :string, default: ""
    add_column :farmers_markets, :wednesday, :string, default: ""
    add_column :farmers_markets, :thursday, :string, default: ""
    add_column :farmers_markets, :friday, :string, default: ""
    add_column :farmers_markets, :saturday, :string, default: ""
    add_column :farmers_markets, :sunday, :string, default: ""
  end
end
