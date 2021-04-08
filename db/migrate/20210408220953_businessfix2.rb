class Businessfix2 < ActiveRecord::Migration[5.2]
  def change
     add_column :businesses, :price, :integer, null: false
  end
end
