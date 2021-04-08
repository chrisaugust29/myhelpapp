class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string  :name, null: false
      t.integer :creator_id, null: false
      t.string  :category, null: false
      t.string  :street, null: false
      t.string  :city, null: false
      t.integer :zip_code, null: false
      t.string  :webpage, null: false
      t.integer :phone_number, null: false
      

      t.timestamps
    end
    add_index :businesses, :creator_id
  end
end
