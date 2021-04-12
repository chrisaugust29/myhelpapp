class Fix < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :price, :string
  end
end
