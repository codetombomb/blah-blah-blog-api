class Blog < ApplicationRecord
    belongs_to :user
    has_many :likes, dependent: :destroy
    has_many :users, through: :likes
    validates :title, uniqueness: true
end