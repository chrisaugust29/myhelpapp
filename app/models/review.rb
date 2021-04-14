class Review < ApplicationRecord
    validates :body, :rating, :business_id, :author_id, presence: true
    validates :rating ,inclusion: {in: (1..5)}

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
