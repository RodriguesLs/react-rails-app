FROM ruby:2.6.6

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs && \
gem install bundler rails

ENV APP_HOME /todo-rails-api

RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ADD Gemfile $APP_HOME/ 
ADD Gemfile.lock $APP_HOME/ 
RUN bundle install
COPY . $APP_HOME/

EXPOSE 3000

CMD ["/bin/bash"]
