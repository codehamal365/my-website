"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9779],{8975:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(4848),i=t(8453);const o={},s=void 0,a={id:"spring/spring\u6ce8\u5165bean\u7684\u56db\u79cd\u65b9\u5f0f",title:"spring\u6ce8\u5165bean\u7684\u56db\u79cd\u65b9\u5f0f",description:"spring\u5bb9\u5668\u6ce8\u5165\u7ec4\u4ef6\u7684\u56db\u79cd\u65b9\u5f0f",source:"@site/docs/spring/spring\u6ce8\u5165bean\u7684\u56db\u79cd\u65b9\u5f0f.md",sourceDirName:"spring",slug:"/spring/spring\u6ce8\u5165bean\u7684\u56db\u79cd\u65b9\u5f0f",permalink:"/my-website/docs/spring/spring\u6ce8\u5165bean\u7684\u56db\u79cd\u65b9\u5f0f",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/spring\u6ce8\u5165bean\u7684\u56db\u79cd\u65b9\u5f0f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"springboot\u9879\u76ee\u6253\u5305\u7626\u8eab",permalink:"/my-website/docs/spring/springboot\u9879\u76ee\u6253\u5305\u7626\u8eab"},next:{title:"websocket_stomp",permalink:"/my-website/docs/spring/websocket_stomp"}},c={},p=[{value:"spring\u5bb9\u5668\u6ce8\u5165\u7ec4\u4ef6\u7684\u56db\u79cd\u65b9\u5f0f",id:"spring\u5bb9\u5668\u6ce8\u5165\u7ec4\u4ef6\u7684\u56db\u79cd\u65b9\u5f0f",level:2}];function l(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"spring\u5bb9\u5668\u6ce8\u5165\u7ec4\u4ef6\u7684\u56db\u79cd\u65b9\u5f0f",children:"spring\u5bb9\u5668\u6ce8\u5165\u7ec4\u4ef6\u7684\u56db\u79cd\u65b9\u5f0f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@ComponetScan"}),"\u548c",(0,r.jsx)(e.code,{children:"@Component"}),"\uff08",(0,r.jsx)(e.code,{children:"@Componet"}),"\u3001",(0,r.jsx)(e.code,{children:"@Controller"}),",",(0,r.jsx)(e.code,{children:"@Service"}),",",(0,r.jsx)(e.code,{children:"@Repository"}),"\uff09\u4f7f\u7528\u5305\u626b\u63cf\u548c\u7ec4\u4ef6\u6807\u6ce8"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f8b\u5982",(0,r.jsx)(e.code,{children:"@SpringbootApplication"}),"\u6ce8\u89e3"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@SpringBootApplication\n\u6e90\u7801\n@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Inherited\n@SpringBootConfiguration\n@EnableAutoConfiguration\n@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),\n\t\t@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })\npublic @interface SpringBootApplication\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u9ed8\u8ba4\u662f\u52a0\u8f7d\u548cApplication\u7c7b\u6240\u5728\u540c\u4e00\u76ee\u5f55\u4e0b\u7684\u5305\u548c\u6240\u6709\u5b50\u5305\u7684\u914d\u7f6e\u7c7b\u3002\u5982\u679c\u9700\u8981\u989d\u5916\u6dfb\u52a0\u5176\u4ed6\u975e\u4e0a\u8ff0\u5305\u4e0b\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u589e\u52a0\u6ce8\u89e3",(0,r.jsx)(e.code,{children:"@ComponentScan"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@Configuration"}),"\u548c",(0,r.jsx)(e.code,{children:"@Bean"}),"\u65b9\u5f0f"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u573a\u666f\uff1a\u5bfc\u5165\u7b2c\u4e09\u65b9\u5305\u7ec4\u4ef6\uff0c\u6216\u5176\u4ed6jar\u5305\u4e2d\u7c7b\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class User {\n    //@Value("Tom")\n    public String username;\n \n    public User(String s) {\n        this.username = s;\n    }\n}\n \n \n@Configuration\npublic class ImportConfig {\n    @Bean\n    public User user(){\n        return new User("Lily");\n    }\n}\n \n \n@RestController\npublic class ImportDemoController {\n \n    @Autowired\n    private User user;\n \n \n    @RequestMapping("/importDemo")\n    public String demo() throws Exception {\n        String s = user.username;\n        return "ImportDemo@SpringBoot " + s;\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@Import"}),"\u7ed9\u5bb9\u5668\u5bfc\u5165\u4e00\u4e2a\u7ec4\u4ef6"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"@Import"}),",\u8981\u5bfc\u5165\u7ec4\u4ef6\u7684\u7c7b\uff0c\u5bb9\u5668\u4f1a\u81ea\u52a8\u6ce8\u518c\u8be5\u7ec4\u4ef6\uff0cid\u9ed8\u8ba4\u662f\u5168\u7c7b\u540d"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class ImportDemo {\n    public void doSomething () {\n        System.out.println("ImportDemo.doSomething()");\n    }\n}\n \n@Configuration\n@Import({ImportDemo.class})\npublic class ImportConfig{\n    @Bean\n    public User user(){\n        return new User("Lily");\n    }\n}\n \n \n@RestController\npublic class ImportDemoController {\n \n    @Autowired\n    private User user;\n \n    @Autowired\n    private ImportDemo importDemo;\n \n    @RequestMapping("/importDemo")\n    public String demo() throws Exception {\n        importDemo.doSomething();\n        \n        String s = user.username;\n        \n \n        return "ImportDemo@SpringBoot " + s;\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ImportSelector"}),",\u8fd4\u56de\u9700\u8981\u5bfc\u5165\u7ec4\u4ef6\u7684\u5168\u7c7b\u540d\u6570\u7ec4"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'//\u81ea\u5b9a\u4e49\u903b\u8f91\u8fd4\u56de\u9700\u8981\u5bfc\u5165\u7684\u7ec4\u4ef6\npublic class MyImportSelector implements ImportSelector {\n \n    //\u8fd4\u56de\u503c\uff0c\u5c31\u662f\u5230\u5bfc\u5165\u5230\u5bb9\u5668\u4e2d\u7684\u7ec4\u4ef6\u5168\u7c7b\u540d\n    //AnnotationMetadata:\u5f53\u524d\u6807\u6ce8@Import\u6ce8\u89e3\u7684\u7c7b\u7684\u6240\u6709\u6ce8\u89e3\u4fe1\u606f\n    @Override\n    public String[] selectImports(AnnotationMetadata importingClassMetadata) {\n        // TODO Auto-generated method stub\n        //importingClassMetadata\n        //\u65b9\u6cd5\u4e0d\u8981\u8fd4\u56denull\u503c\n        //\u5f53\u524d\u7c7b\u7684\u6240\u6709\u6ce8\u89e3\n        Set<String> annotationTypes = importingClassMetadata.getAnnotationTypes();\n        System.out.println("\u5f53\u524d\u914d\u7f6e\u7c7b\u7684\u6ce8\u89e3\u4fe1\u606f\uff1a"+annotationTypes);\n        //\u6ce8\u610f\u4e0d\u80fd\u8fd4\u56denull,\u4e0d\u7136\u4f1a\u62a5NullPointException\n        return new String[]\t       \t{"com.adolph.springboot.bean.User01","com.adolph.springboot.bean.User02"};\n    }\n}\n \npublic class User01 {\n\tpublic String username;\n \n    public User01() {\n        System.out.println("user01...constructor");\n    }\n}\n \npublic class User02 {\n    public String username;\n \n    public User02() {\n        System.out.println("user02...constructor");\n    }\n}\n \n@Configuration\n@Import({ImportDemo.class, MyImportSelector.class})\npublic class ImportConfig {\n \n    /**\n     * \u7ed9\u5bb9\u5668\u4e2d\u6ce8\u518c\u7ec4\u4ef6\uff1b\n     * 1\uff09\u3001\u5305\u626b\u63cf+\u7ec4\u4ef6\u6807\u6ce8\u6ce8\u89e3\uff08@Controller/@Service/@Repository/@Component\uff09[\u81ea\u5df1\u5199\u7684\u7c7b]\n     * 2\uff09\u3001@Bean[\u5bfc\u5165\u7684\u7b2c\u4e09\u65b9\u5305\u91cc\u9762\u7684\u7ec4\u4ef6]\n     * 3\uff09\u3001@Import[\u5feb\u901f\u7ed9\u5bb9\u5668\u4e2d\u5bfc\u5165\u4e00\u4e2a\u7ec4\u4ef6]\n     * \t\t1\uff09\u3001@Import(\u8981\u5bfc\u5165\u5230\u5bb9\u5668\u4e2d\u7684\u7ec4\u4ef6)\uff1b\u5bb9\u5668\u4e2d\u5c31\u4f1a\u81ea\u52a8\u6ce8\u518c\u8fd9\u4e2a\u7ec4\u4ef6\uff0cid\u9ed8\u8ba4\u662f\u5168\u7c7b\u540d\n     * \t\t2\uff09\u3001ImportSelector:\u8fd4\u56de\u9700\u8981\u5bfc\u5165\u7684\u7ec4\u4ef6\u7684\u5168\u7c7b\u540d\u6570\u7ec4\uff1b\n     * \t\t3\uff09\u3001ImportBeanDefinitionRegistrar:\u624b\u52a8\u6ce8\u518cbean\u5230\u5bb9\u5668\u4e2d\n     * 4\uff09\u3001\u4f7f\u7528Spring\u63d0\u4f9b\u7684 FactoryBean\uff08\u5de5\u5382Bean\uff09;\n     * \t\t1\uff09\u3001\u9ed8\u8ba4\u83b7\u53d6\u5230\u7684\u662f\u5de5\u5382bean\u8c03\u7528getObject\u521b\u5efa\u7684\u5bf9\u8c61\n     * \t\t2\uff09\u3001\u8981\u83b7\u53d6\u5de5\u5382Bean\u672c\u8eab\uff0c\u6211\u4eec\u9700\u8981\u7ed9id\u524d\u9762\u52a0\u4e00\u4e2a&\uff0c&userFactoryBean\n     */\n \n    @Bean\n    public User user(){\n        return new User("Lily");\n    }\n}\n \n@RestController\npublic class ImportDemoController {\n \n    @Autowired\n    private User user;\n \n    @Autowired\n    private ImportDemo importDemo;\n \n    @Autowired\n    private User01 user01;\n \n    \n \n    @RequestMapping("/importDemo")\n    public String demo() throws Exception {\n        importDemo.doSomething();\n        user01.username = "user01";\n        String s = user.username;\n        String s1 = user01.username;\n \n        return "ImportDemo@SpringBoot " + s + " " + s1;\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"ImportBeanDefinitionRegistrar"}),",\u624b\u52a8\u6ce8\u518cbean\u5230\u5bb9\u5668"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class User03 {\n    public String username;\n \n    public User03() {\n        System.out.println("user03...constructor");\n    }\n}\n\n\npublic class MyImportBeanDefinitionRegistrar implements ImportBeanDefinitionRegistrar {\n \n    /**\n     * AnnotationMetadata\uff1a\u5f53\u524d\u7c7b\u7684\u6ce8\u89e3\u4fe1\u606f\n     * BeanDefinitionRegistry:BeanDefinition\u6ce8\u518c\u7c7b\uff1b\n     * \t\t\u628a\u6240\u6709\u9700\u8981\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\u7684bean\uff1b\u8c03\u7528\n     * \t\tBeanDefinitionRegistry.registerBeanDefinition\u624b\u5de5\u6ce8\u518c\u8fdb\u6765\n     */\n    @Override\n    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {\n \n        boolean definition = registry.containsBeanDefinition("com.paopaoedu.springboot.bean.User01");\n        boolean definition2 = registry.containsBeanDefinition("com.paopaoedu.springboot.bean.User02");\n        if(definition && definition2){\n            //\u6307\u5b9aBean\u5b9a\u4e49\u4fe1\u606f\u4f5c\u7528\u57df\u90fd\u53ef\u4ee5\u5728\u8fd9\u91cc\u5b9a\u4e49\uff1b\uff08Bean\u7684\u7c7b\u578b\uff0cBean\u3002\u3002\u3002\uff09\n            RootBeanDefinition beanDefinition = new RootBeanDefinition(User03.class);\n            //\u6ce8\u518c\u4e00\u4e2aBean\uff0c\u6307\u5b9abean\u540d\n            registry.registerBeanDefinition("User03", beanDefinition);\n        }\n    }\n \n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528spring\u63d0\u4f9b\u7684FactoryBean"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9ed8\u8ba4\u83b7\u53d6\u5230\u7684\u662f\u5de5\u5382bean\u8c03\u7528getObject\u521b\u5efa\u7684\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"\u8981\u83b7\u53d6\u5de5\u5382Bean\u672c\u8eab\uff0c\u6211\u4eec\u9700\u8981\u7ed9id\u524d\u9762\u52a0\u4e00\u4e2a&,&xxxFactoryBean \u6ce8\u610f\u7c7b\u540d\u662fX\uff0c\u8fd9\u91cc\u5c31\u662f\u5c0f\u5199\u7684x\uff1f"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class UserFactoryBean implements FactoryBean<User04> {\n    @Override\n    public User04 getObject() throws Exception {\n        // TODO Auto-generated method stub\n        System.out.println("UserFactoryBean...getObject...");\n        return new User04("User04");\n    }\n \n    @Override\n    public Class<?> getObjectType() {\n        // TODO Auto-generated method stub\n        return User04.class;\n    }\n \n    //\u662f\u5426\u5355\u4f8b\uff1f\n    //true\uff1a\u8fd9\u4e2abean\u662f\u5355\u5b9e\u4f8b\uff0c\u5728\u5bb9\u5668\u4e2d\u4fdd\u5b58\u4e00\u4efd\n    //false\uff1a\u591a\u5b9e\u4f8b\uff0c\u6bcf\u6b21\u83b7\u53d6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684bean\uff1b\n    @Override\n    public boolean isSingleton() {\n        // TODO Auto-generated method stub\n        return true;\n    }\n}\n \n \npublic class User04 {\n    public String username;\n    public User04(String s) {\n        String nowtime= DateUtil.now();\n        username=s+" "+nowtime;\n    }\n}\n \n \n \n@Configuration\n@Import({ImportDemo.class, MyImportSelector.class, MyImportBeanDefinitionRegistrar.class})\npublic class ImportConfig {\n \n    /**\n     * \u7ed9\u5bb9\u5668\u4e2d\u6ce8\u518c\u7ec4\u4ef6\uff1b\n     * 1\uff09\u3001\u5305\u626b\u63cf+\u7ec4\u4ef6\u6807\u6ce8\u6ce8\u89e3\uff08@Controller/@Service/@Repository/@Component\uff09[\u81ea\u5df1\u5199\u7684\u7c7b]\n     * 2\uff09\u3001@Bean[\u5bfc\u5165\u7684\u7b2c\u4e09\u65b9\u5305\u91cc\u9762\u7684\u7ec4\u4ef6]\n     * 3\uff09\u3001@Import[\u5feb\u901f\u7ed9\u5bb9\u5668\u4e2d\u5bfc\u5165\u4e00\u4e2a\u7ec4\u4ef6]\n     * \t\t1\uff09\u3001@Import(\u8981\u5bfc\u5165\u5230\u5bb9\u5668\u4e2d\u7684\u7ec4\u4ef6)\uff1b\u5bb9\u5668\u4e2d\u5c31\u4f1a\u81ea\u52a8\u6ce8\u518c\u8fd9\u4e2a\u7ec4\u4ef6\uff0cid\u9ed8\u8ba4\u662f\u5168\u7c7b\u540d\n     * \t\t2\uff09\u3001ImportSelector:\u8fd4\u56de\u9700\u8981\u5bfc\u5165\u7684\u7ec4\u4ef6\u7684\u5168\u7c7b\u540d\u6570\u7ec4\uff1b\n     * \t\t3\uff09\u3001ImportBeanDefinitionRegistrar:\u624b\u52a8\u6ce8\u518cbean\u5230\u5bb9\u5668\u4e2d\n     * 4\uff09\u3001\u4f7f\u7528Spring\u63d0\u4f9b\u7684 FactoryBean\uff08\u5de5\u5382Bean\uff09;\n     * \t\t1\uff09\u3001\u9ed8\u8ba4\u83b7\u53d6\u5230\u7684\u662f\u5de5\u5382bean\u8c03\u7528getObject\u521b\u5efa\u7684\u5bf9\u8c61\n     * \t\t2\uff09\u3001\u8981\u83b7\u53d6\u5de5\u5382Bean\u672c\u8eab\uff0c\u6211\u4eec\u9700\u8981\u7ed9id\u524d\u9762\u52a0\u4e00\u4e2a&\uff0c&userFactoryBean\n     */\n    @Bean\n    public UserFactoryBean userFactoryBean(){\n        return new UserFactoryBean();\n    }\n \n    @Bean\n    public User user(){\n        return new User("Lily");\n    }\n}\n \n \n@RestController\npublic class ImportDemoController {\n \n    @Autowired\n    private User user;\n \n    @Autowired\n    private ImportDemo importDemo;\n \n    @Autowired\n    private User01 user01;\n \n    @Autowired\n    private UserFactoryBean userFactoryBean;\n \n    @RequestMapping("/importDemo")\n    public String demo() throws Exception {\n        importDemo.doSomething();\n        user01.username = "user01";\n        String s = user.username;\n        String s1 = user01.username;\n        String s4 = userFactoryBean.getObject().username;\n \n        return "ImportDemo@SpringBoot " + s + " " + s1 + " " + s4;\n    }\n}\n \n \n@SpringBootApplication\npublic class SpringBootLearningApplication {\n \n    public static void main(String[] args) {\n        SpringApplication.run(SpringBootLearningApplication.class, args);\n \n        AnnotationConfigApplicationContext context =\n                new AnnotationConfigApplicationContext("com.paopaoedu.springboot.config");\n        ImportDemo importDemo = context.getBean(ImportDemo.class);\n        importDemo.doSomething();\n        printClassName(context);\n \n        Object bean1 = context.getBean("userFactoryBean");\n        Object bean2 = context.getBean("userFactoryBean");\n        System.out.println(bean1 == bean2);\n    }\n \n    private static void printClassName(AnnotationConfigApplicationContext annotationConfigApplicationContext){\n        String[] beanDefinitionNames = annotationConfigApplicationContext.getBeanDefinitionNames();\n        for (int i = 0; i < beanDefinitionNames.length; i++) {\n            System.out.println("\u5339\u914d\u7684\u7c7b"+beanDefinitionNames[i]);\n        }\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var r=t(6540);const i={},o=r.createContext(i);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);