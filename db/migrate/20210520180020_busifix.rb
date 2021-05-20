class Busifix < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lng, :float
    add_column :businesses, :lat, :float
  end
end
