# JUNO 发版指南

本文档描述了如何发布 `@ringcentral/juno` 和 `@ringcentral/juno-icon` 包的新版本。

## 📋 快速选择发版类型

| 场景                                           | 发版类型     | 跳转章节                              |
| ---------------------------------------------- | ------------ | ------------------------------------- |
| 正式版发布（生产就绪）                         | 正式发版     | [正式发版流程](#正式发版流程)         |
| 测试版发布（非生产就绪，如 React 18 升级测试） | 测试分支发版 | [测试分支发版流程](#测试分支发版流程) |

---

## 🔧 前置条件

- 已安装 Node.js 和 Yarn
- 有 rcui 仓库的写权限 (`git@github.com:ringcentral/juno.git`)
- 有 GitHub juno 仓库的写权限 (`git@github.com:ringcentral/juno.git`)
- `../juno` 目录存在并已 clone GitHub 仓库

---

## 正式发版流程

> **适用场景**: 代码已合并到 rcui 的 main/develop 分支，准备发布正式版或 prerelease 版本到 npm。

### 流程图

```
rcui main/develop ──┬── 1. 修改版本号 + 提交 + 创建 tag
                    │
                    └── 2. git push origin main + tags
                              │
                              ▼
                    3. npx ts-node scripts/sync-github/sync-github.ts
                              │
                              ▼
                    juno main ─── 4. git push origin main + tags
                              │
                              ▼
                    5. GitHub 创建 Release (选择 tag)
                              │
                              ▼
                    6. GitHub Actions 自动发布到 npm
```

### 步骤 1: 确保代码准备就绪

```bash
cd /path/to/rcui

# 切换到目标分支
git checkout feature/FIJI-99576-react-18

# 确保代码最新
git pull origin feature/FIJI-99576-react-18

# 运行测试确保代码正常
yarn test --testPathPattern="juno-core"

# 运行构建测试
yarn workspace @ringcentral/juno run build:test
```

### 步骤 2: 更新版本号

#### 方式 A: 直接修改 package.json

编辑 `packages/juno-core/package.json` 和/或 `packages/juno-icon/package.json`:

```json
{
  "version": "3.0.0-alpha.0"
}
```

#### 方式 B: 使用交互式脚本

```bash
yarn version-release
```

脚本会询问：

1. 选择包 (`juno-core` 或 `juno-icon`)
2. 选择发布类型 (`current` / `patch` / `minor` / `major`)
3. 选择下一个版本类型

### 步骤 3: 提交代码

```bash
# 添加所有更改
git add .

# 提交（使用规范的 commit message）
git commit -m "chore(release): [juno-core] release 3.0.0-alpha.0

- Add React 18 support (peerDependencies: ^17.0.2 || ^18.0.0)
- Add MUI Re-exports feature
- Fix React 18 TypeScript type issues"
```

### 步骤 4: 创建 Git Tag

```bash
# juno-core
git tag -a juno-core-v3.0.0-alpha.0 -m "Release juno-core v3.0.0-alpha.0 - React 18 support"

# juno-icon (如果同时发版)
git tag -a juno-icon-v2.0.0-alpha.0 -m "Release juno-icon v2.0.0-alpha.0 - React 18 support"
```

### 步骤 5: 推送到 rcui 远程仓库

```bash
# 推送代码
git push origin feature/FIJI-99576-react-18

# 推送 tags
git push origin juno-core-v3.0.0-alpha.0
git push origin juno-icon-v2.0.0-alpha.0
```

### 步骤 6: 同步到 GitHub (juno 公开仓库)

运行同步脚本，它会自动将 rcui 的 commits 和 tags 同步到 `../juno`:

```bash
npx ts-node scripts/sync-github/sync-github.ts
```

**脚本工作原理**:

- 读取 `../juno/sync-github.json` 记录的上次同步位置
- 遍历 rcui 的新 commits，逐个同步到 juno
- 检测到 tag 时会自动在 juno 创建对应的 tag
- 自动处理作者映射和 commit message 格式转换

### 步骤 7: 推送 juno 仓库的 tags

```bash
cd ../juno

# 推送代码
git push origin main

# 推送 tags
git push origin juno-core-v3.0.0-alpha.0
git push origin juno-icon-v2.0.0-alpha.0
```

### 步骤 8: 在 GitHub 创建 Release

1. 访问 https://github.com/ringcentral/juno/releases
2. 点击 "Draft a new release"
3. 选择 tag: `juno-core-v3.0.0-alpha.0`
4. 填写 Release 标题: `juno-core v3.0.0-alpha.0`
5. 填写 Release 说明
6. 如果是 prerelease 版本，勾选 "This is a pre-release"
7. 点击 "Publish release"

> **重复此步骤** 为 `juno-icon-v2.0.0-alpha.0` 创建另一个 Release

### 步骤 9: 自动发布到 npm

GitHub Actions 会自动触发 `.github/workflows/publish-npm-package.yml`：

- 检测到 `juno-core` 相关的 release → 发布 `@ringcentral/juno`
- 检测到 `juno-icon` 相关的 release → 发布 `@ringcentral/juno-icon`

---

## 测试分支发版流程

> **适用场景**: 代码在 feature 分支上，尚未合并到 main，需要发布测试版本供其他项目（如 FIJI）提前集成测试。
>
> **典型用例**: React 18 升级测试、大型重构测试、新功能预览版

### 流程图

```
rcui feature 分支 ──┬── 1. 修改版本号 (如 3.0.0-alpha.0)
                    │
                    └── 2. 提交代码
                              │
                              ▼
                    3. 运行 sync-test-branch.ts 脚本
                              │
                              ▼
                    juno 测试分支 ─── 4. 脚本自动：创建分支 + 同步 + 提交 + 创建 tag + 推送
                              │
                              ▼
                    5. GitHub 创建 Release (选择 tag, 勾选 pre-release)
                              │
                              ▼
                    6. GitHub Actions 自动发布到 npm
```

### 方式 A: 使用脚本（推荐）

```bash
cd /path/to/rcui

# 1. 确保在 feature 分支
git checkout feature/FIJI-99576-react-18

# 2. 更新版本号（编辑 package.json）
# packages/juno-core/package.json: "version": "3.0.0-alpha.0"
# packages/juno-icon/package.json: "version": "2.0.0-alpha.0"

# 3. 提交代码
git add .
git commit -m "chore(release): [juno-core] release 3.0.0-alpha.0 for React 18 testing"

# 4. 运行测试分支发版脚本
npx ts-node scripts/sync-github/sync-test-branch.ts
```

脚本会交互式询问：

- 确认同步
- juno 测试分支名称
- 是否创建 juno-core tag
- 是否创建 juno-icon tag
- 是否推送到远程

脚本自动执行：

- 同步文件到 ../juno
- 创建/切换到测试分支
- 提交代码
- 创建 tags
- 推送到远程

### 方式 B: 手动操作

<details>
<summary>点击展开手动操作步骤</summary>

#### 步骤 1: 在 rcui feature 分支准备代码

```bash
cd /path/to/rcui

# 确保在 feature 分支
git checkout feature/FIJI-99576-react-18

# 运行测试
yarn test --testPathPattern="juno-core"
yarn workspace @ringcentral/juno run build:test
```

#### 步骤 2: 更新版本号

编辑 `packages/juno-core/package.json`:

```json
{
  "version": "3.0.0-alpha.0"
}
```

编辑 `packages/juno-icon/package.json` (如果需要同时发版):

```json
{
  "version": "2.0.0-alpha.0"
}
```

#### 步骤 3: 提交代码

```bash
git add .
git commit -m "chore(release): [juno-core] release 3.0.0-alpha.0 for React 18 testing"
```

#### 步骤 4: 在 juno 创建测试分支并同步

```bash
cd ../juno

# 确保 juno 仓库最新
git checkout main
git pull origin main

# 创建测试分支
git checkout -b feature/react-18-alpha

# 使用 rsync 同步（排除 node_modules）
rsync -av --exclude='node_modules' --exclude='dist' ../rcui/packages/juno-core/src ./packages/juno-core/
cp ../rcui/packages/juno-core/package.json ./packages/juno-core/
cp ../rcui/packages/juno-icon/package.json ./packages/juno-icon/

# 提交更改
git add .
git commit -m "chore(release): [juno-core] release 3.0.0-alpha.0 - React 18 support"

# 创建 tags
git tag -a juno-core-v3.0.0-alpha.0 -m "Release juno-core v3.0.0-alpha.0 - React 18 alpha"
git tag -a juno-icon-v2.0.0-alpha.0 -m "Release juno-icon v2.0.0-alpha.0 - React 18 alpha"
```

#### 步骤 5: 推送 juno 测试分支和 tags

```bash
git push origin feature/react-18-alpha
git push origin juno-core-v3.0.0-alpha.0
git push origin juno-icon-v2.0.0-alpha.0
```

</details>

### 在 GitHub 创建 Release

1. 访问 https://github.com/ringcentral/juno/releases
2. 点击 "Draft a new release"
3. 选择 tag: `juno-core-v3.0.0-alpha.0`
4. **Target**: 选择测试分支（或让它指向 tag）
5. 填写 Release 标题: `juno-core v3.0.0-alpha.0 (React 18 Alpha)`
6. ✅ **勾选 "This is a pre-release"**
7. 点击 "Publish release"

> 重复此步骤为 `juno-icon-v2.0.0-alpha.0` 创建 Release

### 验证发布

```bash
# 等待 GitHub Actions 完成后验证
npm view @ringcentral/juno versions --json | tail -5

# 在其他项目中安装测试
npm install @ringcentral/juno@3.0.0-alpha.0
```

### 测试分支发版注意事项

1. **版本号必须是 prerelease 格式** (如 `-alpha.0`, `-beta.0`, `-rc.0`)，避免影响正式版用户
2. **勾选 pre-release** 防止被安装为 `@latest`
3. **测试分支不要合并到 juno main**，测试完成后可删除
4. **正式发版时**，代码应先合并到 rcui main，再走正式发版流程

---

## 🏷️ 版本号规范

| 类型   | 格式            | npm tag   | 适用场景               |
| ------ | --------------- | --------- | ---------------------- |
| 正式版 | `2.47.0`        | `@latest` | 生产就绪               |
| Alpha  | `3.0.0-alpha.0` | `@alpha`  | 早期测试，API 可能变化 |
| Beta   | `3.0.0-beta.0`  | `@beta`   | 功能完成，需要测试     |
| RC     | `3.0.0-rc.0`    | `@rc`     | 候选发布，接近生产     |

### 大版本升级时机

- React peerDependencies 变化
- 重大 API 变更
- 删除废弃的功能

## 📦 验证发布

```bash
# 查看 npm 上的版本
npm view @ringcentral/juno versions --json | tail -5

# 安装特定版本测试
npm install @ringcentral/juno@3.0.0-alpha.0
```

## 🔄 回滚

如果发布有问题：

```bash
# 删除本地 tag
git tag -d juno-core-v3.0.0-alpha.0

# 删除远程 tag
git push origin :refs/tags/juno-core-v3.0.0-alpha.0

# npm unpublish（24小时内）
npm unpublish @ringcentral/juno@3.0.0-alpha.0
```

## 📚 相关文件

| 文件                                        | 用途                                        |
| ------------------------------------------- | ------------------------------------------- |
| `scripts/release/release.run.js`            | 交互式版本号更新脚本                        |
| `scripts/sync-github/sync-github.ts`        | 正式发版：同步 rcui main → juno main        |
| `scripts/sync-github/sync-test-branch.ts`   | 测试发版：同步 rcui feature → juno 测试分支 |
| `.github/workflows/publish-npm-package.yml` | GitHub Actions 自动发布到 npm               |
