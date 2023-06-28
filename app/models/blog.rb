class Blog < ApplicationRecord
    belongs_to :user
    has_many :likes, dependent: :destroy
    has_many :users, through: :likes
    has_many :blog_tags
    has_many :tags, through: :blog_tags

    validates :title, uniqueness: true
end