FROM node:10.22.1-alpine3.11
WORKDIR /root/
RUN mkdir openstack_dashboard
WORKDIR /root/openstack_dashboard
COPY ./* /root/openstack_dashboard/
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g @angular/cli@10.1.2
RUN npm install

EXPOSE 4200/tcp
CMD ["ng", "serve"]


