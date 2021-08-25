FROM node:12


# See https://crbug.com/795759
RUN apt-get update && apt-get install -yq libgconf-2-4 locales
RUN localedef -f UTF-8 -i ko_KR ko_KR.UTF-8

ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1


RUN apt-get --assume-yes install gconf-service libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxss1 libxtst6 libappindicator1 libnss3 libasound2 libatk1.0-0 libc6 ca-certificates fonts-liberation lsb-release xdg-utils wget


#JAVA
RUN \
  wget https://javadl.oracle.com/webapps/download/GetFile/1.8.0_261-b12/a4634525489241b9a9e1aa73d9e118e6/linux-i586/jdk-8u261-linux-x64.tar.gz -O /opt/jdk-8u261-linux-x64.tar.gz \
  && tar -xzf /opt/jdk-8u261-linux-x64.tar.gz -C /opt \
  && rm /opt/jdk-8u261-linux-x64.tar.gz \
  && ln -s /opt/jdk1.8.0_261 /opt/jdk
ENV PATH $PATH:/opt/jdk/bin
ENV JAVA_HOME /opt/jdk




# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Create ErrorLogs
# RUN mkdir -p app/logs/errors

# # Create InfoLogs
# RUN mkdir -p app/logs/infos


COPY . /app

# Install app dependencies
# COPY package.json /app
# COPY yarn.lock /app
RUN yarn install

# Bundle app source

RUN yarn build

EXPOSE 8000
CMD [ "yarn", "start" ]
