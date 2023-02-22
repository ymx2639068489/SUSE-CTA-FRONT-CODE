<script setup>
import { ref } from "vue";
const messages = ref([]);

const loadMessage = () => {
};

const isShowMessageBox = ref(false);

const showMessageBox = () => {
  isShowMessageBox.value = true;
};

const message = ref({});

const btnText = ref("确定");

const showMessage = (event, item) => {
};

const deleteMessage = (event, item) => {
};

const isSelect = ref(false);
const showBtn = ref(false);
const disabled = ref(false);

const selectMessage = () => {
  isSelect.value = true;
};

const agreeGxaInvitation = (item) => {
};

const callback = (event, item) => {
  switch (item.callback) {
    case "agreeGxaInvitation":
      agreeGxaInvitation(item);
  }
};

const status = ref(false);

</script>

<template>
  <div class="message-continer">
    <el-badge :value="status ? 'new' : ''">
      <el-icon :size="36" @click="showMessageBox">
        <ChatDotSquare />
      </el-icon>
    </el-badge>
    <el-dialog
      v-model="isShowMessageBox"
      :draggable="true"
      :modal="false"
      width="1000px"
      :append-to-body="true"
      :lock-scroll="false"
    >
      <template #header>
        <div id="header" style="height: 5px">
          <span
            id="title"
            style="
              color: #0691c4;
              border-left: 4px solid #0691c4;
              padding-left: 5px;
            "
            >个人消息</span
          >
        </div>
      </template>
      <!-- <el-divider></el-divider> -->
      <template #default style="background-color: red">
        <el-container>
          <div style="width: 250px; height: 100%">
            <el-menu
              class="menu"
              v-infinite-scroll="loadMessage"
              @select="selectMessage"
            >
              <el-scrollbar>
                <el-menu-item
                  id="item"
                  v-for="item in messages"
                  :key="item.id"
                  :index="item.id.toString()"
                  @click="showMessage($evnet, item)"
                  @mouseover="item.showBtn = true"
                  @mouseleave="item.showBtn = false"
                >
                  <el-icon
                    v-show="item.showBtn"
                    :size="200"
                    @click="deleteMessage($event, item)"
                  >
                    <Close />
                  </el-icon>
                  <div style="display: flex">
                    <div id="avatar-continer">
                      <img
                        id="avatar"
                        :src="item.from.avatarUrl"
                        alt="avatar"
                      />
                    </div>
                    <div id="info">
                      {{ item.from.username }}
                    </div>
                  </div>
                  <el-badge v-if="item.isRead == false" is-dot>
                    <div style="height: 30px"></div>
                  </el-badge>
                </el-menu-item>
              </el-scrollbar>
            </el-menu>
          </div>
          <el-divider direction="vertical" style="height: 400px"> </el-divider>
          <div style="position: relative">
            <el-card
              v-if="isSelect"
              style="
                background-color: white;
                height: 100%;
                width: 650px;
                margin-left: 20px;
              "
            >
              <div
                style="
                  background-color: #0691c4;
                  color: white;
                  font-size: 22px;
                  margin-bottom: 0.5em;
                  text-align: center;
                  position: sticky;
                  top: 0;
                  z-index: 1000;
                "
              >
                <span>{{ message.from.username }}</span>
              </div>
              <el-scrollbar>
                <div style="font-size: 18px; text-indent: 2em">
                  {{ message.content }}
                </div>
              </el-scrollbar>
              <div v-if="showBtn" id="footer">
                <el-button
                  id="btn"
                  type="primary"
                  :disabled="disabled"
                  @click="callback($event, message)"
                  >{{ btnText }}</el-button
                >
              </div>
            </el-card>
          </div>
        </el-container>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped>
.message-continer {
}

.menu {
  width: 260px;
  height: 400px;
  overflow: auto;
  padding: 0;
  margin: 0;
  border: 0px;
}

#item {
  height: 90px;
  font-size: 20px;
  /* justify-content: space-between; */
}

#btn {
  width: 200px;
  background-color: #0691c4;
}

#header {
  /* background-color: red; */

  text-align: start;
}

#title {
  font-size: 28px;
  font-weight: 800;
}

.message-contianer {
  display: flex;
  width: 400px;
  height: 100px;
  border: 2px solid;
  margin: 5px 0;
}

#avatar-continer {
  width: 50px;
  height: 50px;
  /* background-color: red; */
  margin: 0 10px;
}

#avatar {
  width: 100%;
  height: 100%;
  border: 0 solid;
  border-radius: 50%;
}

#content {
  width: 300px;
}

#footer {
  position: absolute;
  bottom: 15px;
  /* left: 0; */
  display: flex;
  width: 100%;
  justify-content: center;
  /* right: 30px; */
  /* background-color: green; */
}
</style>

<style></style>
