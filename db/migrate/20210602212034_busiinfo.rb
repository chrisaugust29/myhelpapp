class Busiinfo < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :info, :text
  end
end
