class Reviewsfix < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :user_id, :author_id
  end
end
