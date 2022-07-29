import {
  LeftOutlined,
  PlayCircleOutlined,
  HomeOutlined,
  RetweetOutlined,
  UploadOutlined,
  ReloadOutlined,
  HeartOutlined,
  HistoryOutlined,
  FormOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
  UserOutlined,
  PhoneOutlined,
  AccountBookOutlined,
  QuestionCircleOutlined,
  ToTopOutlined,
  SaveOutlined,
  DownloadOutlined,
  SearchOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons-vue';

export const useIcons = app => {
  app.component(LeftOutlined.displayName, LeftOutlined); // 问题
  app.component(QuestionCircleOutlined.displayName, QuestionCircleOutlined); // 问题
  app.component(AccountBookOutlined.displayName, AccountBookOutlined); // 钱款
  app.component(PhoneOutlined.displayName, PhoneOutlined); // 电话
  app.component(UserOutlined.displayName, UserOutlined); // 个人
  app.component(HeartOutlined.displayName, HeartOutlined);
  app.component(PlayCircleOutlined.displayName, PlayCircleOutlined);
  app.component(RetweetOutlined.displayName, RetweetOutlined);
  app.component(UploadOutlined.displayName, UploadOutlined);
  app.component(LogoutOutlined.displayName, LogoutOutlined);
  app.component(FileSearchOutlined.displayName, FileSearchOutlined); // 搜索
  app.component(HistoryOutlined.displayName, HistoryOutlined);
  app.component(FormOutlined.displayName, FormOutlined);
  app.component(TableOutlined.displayName, TableOutlined);
  app.component(AppstoreAddOutlined.displayName, AppstoreAddOutlined);
  app.component(UnorderedListOutlined.displayName, UnorderedListOutlined);
  app.component(WarningOutlined.displayName, WarningOutlined);
  app.component(CheckCircleOutlined.displayName, CheckCircleOutlined);
  app.component(HomeOutlined.displayName, HomeOutlined); // 首页
  app.component(SaveOutlined.displayName, SaveOutlined); // 保存
  app.component(ToTopOutlined.displayName, ToTopOutlined); // 提交 上传
  app.component(DownloadOutlined.displayName, DownloadOutlined); // 提交 上传
  app.component(SearchOutlined.displayName, SearchOutlined); // 退出
  app.component(MenuUnfoldOutlined.displayName, MenuUnfoldOutlined); // 退出
  app.component(MenuFoldOutlined.displayName, MenuFoldOutlined);
  app.component(CheckCircleTwoTone.displayName, CheckCircleTwoTone);
  app.component(CloseCircleTwoTone.displayName, CloseCircleTwoTone);
  app.component(ReloadOutlined.displayName, ReloadOutlined);
};
