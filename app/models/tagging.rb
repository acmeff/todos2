class Tagging < ActiveRecord::Base
  validates :tag_id, :todo_id, presence: true
  validates_uniqueness_of :tag_id, scope: :todo_id

  belongs_to :tag
  belongs_to :todo

end
