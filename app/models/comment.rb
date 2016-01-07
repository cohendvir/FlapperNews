class Comment
  include Mongoid::Document
  embedded_in :post

  field :author, type: :string
  field :body, type: :string
  field :upvotes, type: :integer, default: 0

end
