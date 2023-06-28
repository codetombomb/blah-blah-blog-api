class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :blog_id
end
