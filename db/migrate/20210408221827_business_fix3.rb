class BusinessFix3 < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :phone_number, :string
    change_column :businesses, :zip_code, :string
  end
end
