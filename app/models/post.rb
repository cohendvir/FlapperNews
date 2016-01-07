class Post
  include Mongoid::Document
  embeds_many :comments

  field :title, type: :string
  field :link, type: :string
  field :upvotes, type: :integer, default: 0
  field :downvotes, type: :integer, default: 0

  after_initialize do
      self[:comments] ||= []
  end
end
