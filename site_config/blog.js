export default {
  'en-us': {
    barText: 'Blog',
    postsTitle: 'All posts',
    list: [
      {
        title: 'Sentinel: The flow sentinel of Dubbo services',
        author: 'Eric Zhao',
        dateStr: 'July 27th, 2018',
        desc: 'This blog introduces to the Sentinel and its best practice with Dubbo services. Sentinel is a powerful library that takes "flow" as the breakthrough point, and covers multiple fields including flow control, circuit breaking and load protection to guarantee service stability.',
        link: '/blog/sentinel-introduction-for-dubbo.md',
      },
      {
        title: 'Tracking with Pinpoint',
        author: '@majinkai',
        dateStr: 'July 12th, 2018',
        desc: 'Call chain tracking and performance monitoring for Dubbo distributed applications using Pinpoint',
        link: '/blog/pinpoint.md',
      },
      {
        title: 'The first Dubbo meetup has been held in Beijing',
        author: 'Huxing Zhang',
        dateStr: 'May 12nd，2018',
        desc: 'The first Dubbo meetup has successfully been held in Beijing, over 400+ people were present. What a great event! ',
        link: '/blog/dubbo-meetup-beijing-may-12th-2018.md',
      },
      {
        title: 'The ApacheCon NA schedule has been announced',
        author: 'Huxing Zhang',
        dateStr: 'May 2nd，2018',
        desc: 'Ian Luo and Jun Liu will talk about "Introducing Apache Dubbo(Incubating): What is Dubbo and How it Works" at ApacheCon NA this year in Montréal!',
        link: '/blog/apachecon-na-2018.md',
      },
      {
        title: 'The GSoC (Google Summer of Code) 2018 projects has been announced',
        author: 'Huxing Zhang',
        dateStr: 'April 25th，2018',
        desc: 'Raghu Reddy\'s project "Extending Serialization protocols support for Apache Dubbo" has been accepted! Congratulations!',
        link: '/blog/gsoc-2018.md',
      },
      {
        title: 'Dubbo roadmap is announced in QCon Beijing 2018',
        author: 'Huxing Zhang',
        dateStr: 'April 22nd，2018',
        desc: 'Ian Luo has delivered a great talk at QCon Beijing 2018, where the roadmap of Dubbo has also be announced',
        link: '/blog/qcon-beijing-2018.md',
      },
      {
        title: 'Introduction to Dubbo spi ',
        author: 'wangxuekui',
        dateStr: 'August 9th, 2018',
        desc: 'We have introduction to Dubbo spi.',
        link: '/blog/introduction-to-dubbo-spi.md',
      },
      {
        title: 'Use anntation in Dubbo',
        author: 'Ge Shao',
        dateStr: 'August 7nd，2018',
        desc: 'This blog introduces how to use annotations',
        link: '/blog/dubbo-annotation.md',
      },
      {
        title: 'Using Zookeeper in Dubbo',
        author: 'Mani',
        dateStr: 'August 7th，2018',
        desc: 'This blog introduces how to use Zookeeper in Dubbo',
        link: '/blog/dubbo-zk.md',
      },
      {
        title: 'Your First Dubbo Demo',
        author: 'Yang Xinru',
        dateStr: 'August 7th，2018',
        desc: 'Your First Dubbo Demo',
        link: '/blog/dubbo-101.md',
      }
    ]
  },
  'zh-cn': {
    barText: '博客',
    postsTitle: '所有文章',
    list: [
        {
            title: '如何基于Dubbo实现全异步调用链',
            author: '@chickenlj',
            dateStr: 'August 10th, 2018',
            desc: '本文回顾了 2.6.x 版本的异步实现，然后引出了 2.7.0 版本基于 CompletableFuture 的异步编程方式',
            link: '/blog/dubbo-new-async.md',
        },
        {
            title: 'Dubbo的负载均衡',
            author: '@leiwei',
            dateStr: 'August 10th, 2018',
            desc: '本文介绍了负载均衡的相关概念以及 Dubbo 中的负载均衡策略实现',
            link: '/blog/dubbo-generic-invoke.md',
        },
        {
            title: 'Dubbo的泛化调用',
            author: '@jerrick',
            dateStr: 'August 10th, 2018',
            desc: '本文介绍了 Dubbo 泛化调用的使用场景及相关示例',
            link: '/blog/dubbo-generic-invoke.md',
        },
      {
          title: '如何准备一次Apache发布',
          author: '@chickenlj',
          dateStr: 'August 8th, 2018',
          desc: '从如何搭建本地构建环境到如何发起投票，详细的介绍了Apache版本发布的完整流程',
          link: '/blog/Prepare-an-Apache-release.md',
      },
      {
          title: '在 Dubbo 应用中使用 Zookeeper',
          author: '@beiwei30',
          dateStr: 'August 3rd, 2018',
          desc: '介绍了 Zookeeper 的基本概念、用法，以及如何在 Dubbo 应用中使用 Zookeeper 作为注册中心。',
          link: '/blog/dubbo-zk.md',
      },
        {
        title: '通过QoS对服务进行动态控制',
        author: 'Huxing Zhang',
        dateStr: 'August 2nd, 2018',
        desc: '介绍了如何使用Dubbo的QoS功能对服务进行动态配置，以及相关的参数及配置方式。',
        link: '/blog/introduction-to-dubbo-qos.md',
      },
      {
        title: '在 Dubbo 中使用注解',
        author: '@beiwei30',
        dateStr: 'August 1st, 2018',
        desc: '介绍了如何使用注解方式而非 XML 方式来开发 Dubbo 应用，可以学习到如何使用 @EnableDubbo、@Service、@Reference 的用法。',
        link: '/blog/dubbo-annotation.md',
      },
      {
        title: '从跨语言调用到 dubbo2.js',
        author: '徐靖峰',
        dateStr: 'July 27th, 2018',
        desc: '如何使用 dubbo2.js 进行跨语言的 dubbo 调用',
        link: '/blog/dubbo2-js.md',
      },
      {
        title: 'Sentinel 为 Dubbo 服务保驾护航',
        author: 'Eric Zhao',
        dateStr: 'July 24th, 2018',
        desc: '主要介绍了面向分布式服务架构的轻量级流量控制组件 Sentinel 以及在 Dubbo 中整合使用 Sentinel 的最佳实践。',
        link: '/blog/sentinel-introduction-for-dubbo.md',
      },
      {
        title: '使用Pinpoint做分布式跟踪',
        author: '@majinkai',
        dateStr: 'July 12th, 2018',
        desc: '利用Pinpoint对Dubbo分布式应用进行调用链跟踪与性能监控',
        link: '/blog/pinpoint.md',
      },
      {
        title: 'Dubbo 的同步与异步调用方式',
        author: '@Jerrick Zhu',
        dateStr: 'July 10th, 2018',
        desc: '主要讲述了 Dubbo 在底层异步通信机制的基础上实现的同步调用、异步调用、参数回调以及事件通知几种方式及示例。',
        link: '/blog/dubbo-invoke.md',
      },
      {
        title: '第一个 Dubbo 应用',
        author: '@beiwei30',
        dateStr: 'June 2nd, 2018',
        desc: '现代的分布式服务框架的基本概念与 RMI 是类似的，同样是使用 Java 的 Interface 作为服务契约，通过注册中心来完成服务的注册和发现，远程通讯的细节也是通过代理类来屏蔽。',
        link: '/blog/dubbo-101.md',
      },
      {
        title: 'Dubbo基本用法-Dubbo Provider配置',
        author: '@cvictory',
        dateStr: 'June 1st, 2018',
        desc: '主要讲述如何配置dubbo，按照配置方式上分，可以分为：XML配置，properties方式配置，注解方式配置，API调用方式配置。',
        link: '/blog/dubbo-basic-usage-dubbo-provider-configuration.md',
      },
      {
        title: 'Spring Boot+Dubbo应用启停源码分析',
        author: 'Huxing Zhang',
        dateStr: 'May 28th, 2018',
        desc: 'dubbo-spring-boot-project致力于简化 Dubbo RPC 框架在Spring Boot应用场景的开发，同时也整合了Spring Boot特性。',
        link: '/blog/spring-boot-dubbo-start-stop-analysis.md',
      },
      {
        title: '优化技巧：提前if判断帮助CPU分支预测',
        author: '@hengyunabc',
        dateStr: 'May 20th, 2018',
        desc: '要提高代码执行效率，一个重要的原则就是尽量避免CPU把流水线清空，那么提高分支预测的成功率就非常重要。那么对于代码里，如果某个switch分支概率很高，是否可以考虑代码层面帮CPU把判断提前，来提高代码执行效率呢？',
        link: '/blog/optimization-branch-prediction.md',
      },
      {
        title: 'Dubbo可扩展机制实战',
        author: '@vangoleo',
        dateStr: 'May 10th, 2018',
        desc: '在谈到软件设计时，可扩展性一直被谈起，那到底什么才是可扩展性，什么样的框架才算有良好的可扩展性呢？',
        link: '/blog/introduction-to-dubbo-spi.md',
      },
      {
        title: 'Dubbo可扩展机制源码解析',
        author: '@hengyunabc',
        dateStr: 'May 10th, 2018',
        desc: '在前面的博客中，我们了解了Dubbo扩展机制的一些概念，初探了Dubbo中LoadBalance的实现，并自己实现了一个LoadBalance。接下来，我们就深入Dubbo的源码，一睹庐山真面目。',
        link: '/blog/introduction-to-dubbo-spi-2.md',
      },
    ]
  },
};
