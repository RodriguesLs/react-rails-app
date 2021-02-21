require "rails_helper"

RSpec.describe 'Task', type: :model do
  describe "#create" do
    context "when invoke create" do
      it "should be success" do
        expect do
          Task.create(title: 'new-title', done: false)
        end.to change { Task.count }.from(0).to(1)
      end      
    end
  end
end
