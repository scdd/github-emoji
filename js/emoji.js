let emojiData = [
    {"name":"0 error 0 warning.jpg"},
    {"name":"6点下班我是一定要走的.gif"},
    {"name":"BUG闪瞎我的眼.jpg"},
    {"name":"MYSQL从删库到跑路.gif"},
    {"name":"PHP是最好的语言.png"},
    {"name":"一名路过的小码农.jpg"},
    {"name":"一杯茶一包烟，一张图片改一天.jpg"},
    {"name":"上一个改需求的人染红了这把剑.png"},
    {"name":"下班我是不会走的.gif"},
    {"name":"不同时间段的程序员们.jpg"},
    {"name":"不要重构去复制.jpg"},
    {"name":"不让我学习还不如让我去死.jpg"},
    {"name":"产品经理快跳吧.jpg"},
    {"name":"产品经理说要让APP随心情颜色变化.jpg"},
    {"name":"什么？服务器又挂了.jpeg"},
    {"name":"什么？需求又改了.gif"},
    {"name":"从事程序员5年的状态.jpg"},
    {"name":"代码写完了吗.gif"},
    {"name":"会议圆满结束.jpeg"},
    {"name":"你TMD在代码里下毒.jpg"},
    {"name":"你与服务器断开连接.gif"},
    {"name":"你做梦，告诉你不可能.jpeg"},
    {"name":"你再提一个需求试试.jpg"},
    {"name":"你别急，等我剪完头发再修BUG.jpg"},
    {"name":"你发誓，不改需求了.jpg"},
    {"name":"你就是我打死我，我也不改这个bug.jpg"},
    {"name":"你是外包，不要偷吃公司零食.gif"},
    {"name":"你的代码很棒，现在他是我的了.png"},
    {"name":"你醒了，快起来写代码.jpg"},
    {"name":"停止吹逼，都敲代码去.jpg"},
    {"name":"关机，一天工资到手.gif"},
    {"name":"写一天bug，累了吧.jpg"},
    {"name":"写个屁的代码.jpg"},
    {"name":"写代码没见这么积极.jpg"},
    {"name":"写代码繁忙中.gif"},
    {"name":"写你妹的程序.gif"},
    {"name":"写着写着代码.jpg"},
    {"name":"前端，你代码自己写.jpg"},
    {"name":"劳资再也不写代码了.gif"},
    {"name":"卧槽这个实现好牛逼怎么做的.jpg"},
    {"name":"又有新的需求了.jpeg"},
    {"name":"又让老子改，法克.jpg"},
    {"name":"反复分析.png"},
    {"name":"吃我一招.jpg"},
    {"name":"同志快醒醒，你还有一串代码提示错误，起来改改.jpg"},
    {"name":"吓得我被初始化了.jpeg"},
    {"name":"嗨嗨，醒醒，敲代码了.jpg"},
    {"name":"图片无法加载.gif"},
    {"name":"在你们聊天的时候，我已经写好几十万行代码了.gif"},
    {"name":"垃圾语言，毁我青春.gif"},
    {"name":"头发越来越少.jpg"},
    {"name":"完了你的程序出BUG了.jpg"},
    {"name":"害你加班的bug就是我写的.jpg"},
    {"name":"对方不想和你说话.jpg"},
    {"name":"对方不想和你说话并向你扔了一个需求.jpg"},
    {"name":"对方不想和你说话并向你扔了一堆BUG.jpg"},
    {"name":"对方不想和你说话，并向你抛出异常.jpg"},
    {"name":"对方不想跟你说话并向你抛出了一份鸟哥语录.jpg"},
    {"name":"对方接住你抛出的异常并完美解决.png"},
    {"name":"对方敏捷的躲开了你的BUG.jpg"},
    {"name":"对方解决了你的异常并向你抛出了一串乱码.png"},
    {"name":"少壮不努力，长大写代码.jpg"},
    {"name":"工作三连.jpeg"},
    {"name":"开发说那不是BUG还打了我.jpg"},
    {"name":"快下班了，这里有个小bug修复完再走.gif"},
    {"name":"想敲代码，想得睡不着.jpg"},
    {"name":"感谢你这一年废寝忘食的加班.jpg"},
    {"name":"我不想改BUG.jpeg"},
    {"name":"我们写的代码不用改了.gif"},
    {"name":"我们敲代码的不懂这个.jpg"},
    {"name":"我们是程序员.jpg"},
    {"name":"我写的代码不会有问题的.gif"},
    {"name":"我又不能测试所有功能.jpeg"},
    {"name":"我只是个小前端.jpg"},
    {"name":"我可能是个假程序员.jpg"},
    {"name":"我在敲代码.jpg"},
    {"name":"我就是想问问这个变量名谁起的.jpg"},
    {"name":"我提的是不是BUG.jpg"},
    {"name":"我爱编程，编程使我快乐.jpg"},
    {"name":"我的内心毫无波动，甚至还有点想敲代码.jpg"},
    {"name":"我的大脑.jpg"},
    {"name":"拒绝提需求三连.jpeg"},
    {"name":"提需求者，年会无奖.png"},
    {"name":"提需求？先跪下.png"},
    {"name":"改了你又不服.png"},
    {"name":"昨天程序运行是正常，不知为啥今天不行了.jpeg"},
    {"name":"是不是出bug了.jpg"},
    {"name":"有了这些还要女朋友干嘛.jpg"},
    {"name":"此处功能将来必改，不要写死.jpg"},
    {"name":"死循环懵逼.jpg"},
    {"name":"每天瞎逼忙.jpg"},
    {"name":"求你们了放我回去写代码吧.png"},
    {"name":"流下了没技术的泪水.jpg"},
    {"name":"烧死产品.gif"},
    {"name":"现在做程序员呐，压力没那么大.gif"},
    {"name":"百度式搜索教程.jpg"},
    {"name":"看我这本书，再来跟我提需求.jpg"},
    {"name":"真正的程序员.jpg"},
    {"name":"程序写完了吗.jpg"},
    {"name":"程序员的好，阿姨懂.jpg"},
    {"name":"程序员，现在通知你加班.gif"},
    {"name":"程序快下来吧.jpg"},
    {"name":"等我写完了代码，我也要跟你们一起玩.png"},
    {"name":"美术下来吧.jpg"},
    {"name":"老夫敲代码就用jquery.jpg"},
    {"name":"能说得再详细点吗，我没见过世面.jpg"},
    {"name":"计算机就是修电脑的.jpeg"},
    {"name":"说好不提改需求的.jpg"},
    {"name":"说！你还敢不敢再改需求.png"},
    {"name":"还有这种操作.jpg"},
    {"name":"这个东西没法跟你解释.jpg"},
    {"name":"这代码辣眼睛.jpg"},
    {"name":"这破程序老子不编了.png"},
    {"name":"这破程序，我不编了.jpg"},
    {"name":"面向对象编程.jpg"},
    {"name":"骚年出招吧，哥让你三行代码.png"},
    {"name":"鸭！这个bug怎么改.jpg"}
    ]