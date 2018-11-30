class CreateGroceryItems < ActiveRecord::Migration[5.2]
  def change
    create_table :grocery_items do |t|
      t.string :description
      t.integer :farmers_market_id
    end
  end
end
