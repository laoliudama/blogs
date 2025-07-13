import path from "path"
import fs from 'fs'
// 获取项目的文档（本项目的文档都存放在根目录下的pages文件夹下。最多2级目录）
export function getSiderbar() {
  const rootDir = path.resolve('pages')
  return readdirSync(rootDir,'pages')
}
  
/**
 * 递归地读取指定路径下的所有文件和文件夹，生成侧边栏数据结构
 * 该函数旨在为一个目录路径提供一个快捷方式，以自动构建一个包含所有子项（文件和文件夹）的数组
 * 这个数组可以用于在应用程序中动态生成导航菜单或其他类似的UI组件
 * 
 * @param {string} fpath - 文件或文件夹的路径，该路径将被读取以获取侧边栏项
 * @param {string} [prefix=''] - 前缀，用于添加到每个项的链接中，默认为空字符串
 * @returns {Array} 返回一个对象数组，每个对象代表一个文件或文件夹，包含文本和链接属性，用于生成侧边栏
 */
function readdirSync(fpath, prefix = '') {
  // 初始化侧边栏数组，用于存储所有侧边栏项
  const sidebar = []

  // 读取指定路径下的所有文件和文件夹
  fs.readdirSync(fpath).forEach(file => {
    // 构建文件或文件夹的完整路径
    const filePath = path.resolve(fpath, file)

    // 检查当前项是否为文件夹
    if (isDirectory(filePath)) {
      // 如果是文件夹，则递归调用readdirSync函数，并将结果作为子项添加到侧边栏数组中
      
      sidebar.push({
        text: file,
        items: readdirSync(filePath,[prefix, path.basename(filePath)].filter(item => item.trim() !== '').join('/'))
      })
    } else if (file.endsWith('.md')) {
      // 如果是Markdown文件，则将其添加到侧边栏数组中，并生成相应的链接
      sidebar.push({
        text: file.replace('.md', ''),
        link: `${prefix ?  '/'+prefix : ''}/${file}`.replace(/\.md$/, '.html')
      })
    }
  })
  // 返回构建好的侧边栏数组
  return sidebar
}

/**
 * 检查给定路径是否为目录
 * 
 * @param {string} fpath 文件路径
 * @returns {boolean} 如果路径为目录则返回true，否则返回false
 */
function isDirectory(fpath) {
  // 同步获取文件信息并判断是否为目录
  return fs.statSync(fpath).isDirectory()
}
getSiderbar()