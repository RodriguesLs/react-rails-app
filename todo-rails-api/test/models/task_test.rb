require "test_helper"

class TaskTest < ActiveSupport::TestCase
  #setup do
    test "" do
      assert_difference "Task.count" do
        Task.create(title: 'new-title', done: false)
      end
      
    end
    #Task.destroy_all
  #end

  #class CreateContext < TaskTest
  #  test "count should be changed" do
  #    assert_equal 0, Task.count
#
  #    Task.create(title: 'new-title', done: false)
#
  #    assert_equal 1, Task.count
  #  end
#
  #  test "improve above test" do
  #    assert_difference "Task.count" do
  #      Task.create(title: 'new-title', done: false)
  #    end
  #  end
  #end
end
