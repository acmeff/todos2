class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find_by(id: params[:id])
    render json: @todo, include: :tags
  end

  def index
    @todos = Todo.all
    render json: @todos, include: :tags
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todo.find_by(id: params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todo.find_by(id: params[:id])
    todo = @todo.destroy
    render json: todo
  end


  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done, tag_names: [])
  end
end
