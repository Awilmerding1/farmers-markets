class CreateFarmersMarkets < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers_markets do |t|
      t.string :facilityname
      t.string :address
      t.string :borough
      t.string :zipcode
    end
  end
end
