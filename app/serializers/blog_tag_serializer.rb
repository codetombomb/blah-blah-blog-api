class BlogTagSerializer < ActiveModel::Serializer
  attributes :id
  has_one :blog
  has_one :tag
end
