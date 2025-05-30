## 1.1 Quick Demo

We recommend starting with a quick demo of NocoBase to experience its powerful features. You can enter your email and other details in the [Online Demo](https://demo.nocobase.com/new) and click to open an account. This grants you a two-day trial with access to all commercial plugins:

![](https://static-docs.nocobase.com/20241030193217.png)

After receiving the official NocoBase email, you can begin exploring the system without any concerns, gaining hands-on experience with its flexibility and capabilities.

## 1.2 Basic Interface of NocoBase

Welcome to NocoBase! If you’re new, the interface may feel unfamiliar, and you may not know where to start. Don’t worry; let’s familiarize ourselves with the main functional areas step-by-step to help you get started quickly.

### 1.2.1 **Interface Configuration**

Upon first entering NocoBase, you’ll see a clean and intuitive main interface. The [**Interface Configuration**](https://docs.nocobase.com/handbook/ui/ui-editor) button is located in the upper right corner; click this to enter configuration mode, which is your primary workspace for building system pages.

![界面配置模式](https://static-docs.nocobase.com/Solution/202410241241131729744873.png)

**Steps to Operate:**

1. **Enter Configuration Mode**: Click the "Interface Configuration" button in the upper right to enter this mode.
2. **Add a [Menu](https://docs.nocobase.com/handbook/ui/menus) Page**:
   - Click “Add Menu Item.”
   - Enter a menu name (e.g., “Test Page”), then confirm.
   - The system will automatically create and navigate to the new test page.

     ![](https://static-docs.nocobase.com/2024%E5%B9%B410%E6%9C%8830%E6%97%A5%20pagedemo.gif)
3. **Create a [Block](https://docs.nocobase.com/handbook/ui/blocks)**:
   - On the test page, click the “Create Block” button.
   - Select a data block type, such as “Table Block.”
   - Connect it to a data table, like the built-in “Users” table.
   - Choose the fields you want to display, and confirm.

![创建区块](https://static-docs.nocobase.com/Solution/demov3N-2.gif)

NocoBase’s block design draws inspiration from Notion but offers more powerful functionality, supporting the creation of more complex systems. In the following tutorials, we’ll dive deeper into the capabilities of various block types.

### 1.2.2 **Plugin Manager**

Plugins are essential tools for extending NocoBase’s functionality. In the [**Plugin Manager**](https://docs.nocobase.com/handbook/plugin-manager), you can view, install, enable, or disable various plugins to meet different business needs.

By using plugin extensions, you can achieve convenient or unexpected integrations, facilitating creation and development even further.

![插件管理器](https://static-docs.nocobase.com/Solution/202410241243241729745004.png)

**Steps to Operate:**

1. **View Installed Plugins**: Click “Plugin Manager” to view all currently installed plugins.
2. **Activate a Plugin**:
   - Find the plugin you need, such as the “Theme Editor” plugin.
   - Click the “Enable” button to activate it.

     ![demov3N-12N.gif](https://static-docs.nocobase.com/Solution/demov3N-12N.gif)
3. **Test Plugin Functionality**:
   - Once activated, you can adjust the system theme from the Theme Editor interface, including colors, fonts, etc., for personalized customization.

     ![主题编辑器界面](https://static-docs.nocobase.com/Solution/202410241245021729745102.png)

### 1.2.3 **Settings Page**

The **Settings Page** integrates settings options for the system and some plugins, helping you comprehensively manage all aspects of NocoBase.

![设置页面](https://static-docs.nocobase.com/Solution/202410241820561729765256.png)

Some commonly used plugin configuration options include:

- **[Data Source Management](https://docs.nocobase.com/handbook/data-source-manager)**: Manage all data tables and configure primary or external databases.
- **[System Settings](https://docs.nocobase.com/handbook/system-settings)** : Modify basic information like system name, logo, and language.
- **[User and Permissions](https://docs.nocobase.com/handbook/users)**: Manage user accounts and configure permissions for different roles.
- **[Plugin Settings](https://docs.nocobase.com/handbook/plugin-manager)**: Configure and manage installed plugins in detail.

### 1.2.4 **Version Information and Support**

In the upper right corner of the interface, you can see **NocoBase’s version information**. If you encounter any issues during use, visit the **homepage** and **user manual** for assistance.

![版本信息](https://static-docs.nocobase.com/Solution/202410241825191729765519.png)

### 1.2.5 **Personal Center Menu**

The Personal Center menu, located in the top right, allows you to **modify personal information**, **switch roles**, and perform some important system operations. Some plugins may also extend functionality in this area.

![个人中心菜单](https://static-docs.nocobase.com/Solution/202410241837051729766225.png)

## 1.3 Installing NocoBase

If you decide to dive deeper into using NocoBase, you’ll need to install it on your computer or server. NocoBase offers several installation methods, allowing you to easily embark on a no-code development journey.

### 1.3.1 **Installation Methods**

1. **Docker Installation (Recommended)**

   - **Advantages**: Fast and simple, suitable for users familiar with Docker.
   - **Version Selection**:
     - **main & latest version**: The most stable version to date, suitable for most users.
     - **next version**: Beta version for users interested in new features; note that it may not be fully stable.
   - **Steps**:
     - Follow the [official installation guide](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose) to deploy NocoBase with Docker Compose.
2. **Create-NocoBase-App Installation**

   - **Suitable for**: Frontend developers or users familiar with npm.
   - **Steps**:
     - Refer to the [installation guide](https://docs.nocobase.com/welcome/getting-started/installation/create-nocobase-app) to install using the npm package.
3. **Source Code Installation**

   - **Suitable for**: Developers looking to deeply customize NocoBase.
   - **Steps**:
     - Clone the source code from GitHub and install as per the custom requirements using the [installation guide](https://docs.nocobase.com/welcome/getting-started/installation/git-clone).

### 1.3.2 **Detailed Installation Guide (Using Docker as an Example)**

You can find detailed steps and instructions for any installation method in the **NocoBase installation documentation**. Below is a brief guide for Docker installation to help you get started quickly:

1. **Install Docker**: Ensure Docker is installed on your system. If not, visit the [Docker website](https://www.docker.com/) to download and install.
2. **Obtain Docker Compose File**:
   - Open a terminal or command line tool.
   - Create a NocoBase directory and Docker Compose configuration.

```bash
mkdir nocobase
cd nocobase
vim docker-compose.yml
```

3. After entering `docker-compose.yml`, paste the following configuration, adjust as needed, and save the file:

```yaml
version: "3"

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      - APP_KEY=your-secret-key
      - DB_DIALECT=postgres
      - DB_HOST=postgres
      - DB_DATABASE=nocobase
      - DB_USER=nocobase
      - DB_PASSWORD=nocobase
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - "13000:80"

  postgres:
    image: registry.cn-shanghai.aliyuncs.com/nocobase/postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER=nocobase
      POSTGRES_DB=nocob

ase
      POSTGRES_PASSWORD=nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

4. **Start NocoBase**:
   - Run the following command in the NocoBase directory to start the service:

```bash
docker-compose up -d
```

5. **Access NocoBase**:
   - Open a browser and visit `http://localhost:13000` (depending on configuration) to see the NocoBase login screen.

After completing these steps, you will have successfully installed and launched NocoBase!

---

In [the next chapters (Chapter 2: Designing a Task Management System)](https://www.nocobase.com/en/blog/task-tutorial-system-design) we will further explore NocoBase’s powerful features, guiding you in building a feature-rich application. Let’s take the next step to unlock the potential of no-code development!
