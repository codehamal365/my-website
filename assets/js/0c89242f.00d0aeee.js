"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5687],{544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(4848),o=n(8453);const s={},a=void 0,i={id:"spring/Springboot\u52a0\u8f7d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",title:"Springboot\u52a0\u8f7d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",description:"\u5728@ConfigurationProperties\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u4e86application.yaml\u4e2d\u914d\u7f6e\u7684\u5c5e\u6027\u4f1a\u88ab\u7ed1\u5b9a\u5230\u8be5\u7c7b\u7684\u5c5e\u6027\u4e2d\uff0c\u90a3\u4e48\u5982\u679c\u5f88\u591a\u914d\u7f6e\u90fd\u5199\u5230application\u4e2d\uff0c\u4f1a\u5bfc\u81f4\u914d\u7f6e\u5f88\u4e71\u3002\u540c\u65f6\uff0c\u5982\u679c\u914d\u7f6e\u662f\u4ece\u5176\u4ed6\u8fdc\u7a0b\u6216\u8005\u76ee\u5f55\u52a0\u8f7d\uff0capplication.yaml\u914d\u7f6e\u5e76\u4e0d\u9002\u5408\u7684\u9002\u5408\uff0c\u600e\u4e48\u53bb\u52a0\u8f7d\u5176\u4ed6\u7684\u914d\u7f6e\u6587\u4ef6\u5462\u3002\u4e0b\u9762\u5148\u8bb2\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\uff0c\u5176\u5b9espringboot\u5e94\u8be5\u4e5f\u652f\u6301\u4ee5\u5176\u4ed6profile\u7684\u5f62\u5f0f\u53bb\u5265\u79bb\u914d\u7f6e\uff0c\u4f46\u662f\u76ee\u524d\u4ee5springboot-2.5.2\u8fd9\u5757\u8fd8\u5728\u7814\u7a76\u4e2d\uff0c\u540e\u7eed\u5982\u679c\u53ef\u4ee5\uff0c\u4f1a\u8865\u5145\u4e0a\u6765\u3002",source:"@site/docs/spring/Springboot\u52a0\u8f7d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"spring",slug:"/spring/Springboot\u52a0\u8f7d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",permalink:"/my-website/docs/spring/Springboot\u52a0\u8f7d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spring/Springboot\u52a0\u8f7d\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring-Retry",permalink:"/my-website/docs/spring/Spring-Retry"},next:{title:"WebSocket \u7684 6 \u79cd\u96c6\u6210\u65b9\u5f0f",permalink:"/my-website/docs/spring/spring-websocket"}},c={},l=[{value:"\u901a\u8fc7<code>@PropertySource</code>\u6ce8\u89e3",id:"\u901a\u8fc7propertysource\u6ce8\u89e3",level:2},{value:"\u901a\u8fc7EnvironmentPostProcessor\u8bbe\u7f6e",id:"\u901a\u8fc7environmentpostprocessor\u8bbe\u7f6e",level:2},{value:"1.\u7f16\u5199\u7c7b\u5b9e\u73b0\u8be5\u63a5\u53e3",id:"1\u7f16\u5199\u7c7b\u5b9e\u73b0\u8be5\u63a5\u53e3",level:3},{value:"2.\u914d\u7f6espring.factories \u4f7fMyEnvironmentPostProcessor\u751f\u6548",id:"2\u914d\u7f6espringfactories-\u4f7fmyenvironmentpostprocessor\u751f\u6548",level:3},{value:"3.\u601d\u8003",id:"3\u601d\u8003",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728",(0,r.jsx)(t.code,{children:"@ConfigurationProperties"}),"\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u4e86application.yaml\u4e2d\u914d\u7f6e\u7684\u5c5e\u6027\u4f1a\u88ab\u7ed1\u5b9a\u5230\u8be5\u7c7b\u7684\u5c5e\u6027\u4e2d\uff0c\u90a3\u4e48\u5982\u679c\u5f88\u591a\u914d\u7f6e\u90fd\u5199\u5230application\u4e2d\uff0c\u4f1a\u5bfc\u81f4\u914d\u7f6e\u5f88\u4e71\u3002\u540c\u65f6\uff0c\u5982\u679c\u914d\u7f6e\u662f\u4ece\u5176\u4ed6\u8fdc\u7a0b\u6216\u8005\u76ee\u5f55\u52a0\u8f7d\uff0capplication.yaml\u914d\u7f6e\u5e76\u4e0d\u9002\u5408\u7684\u9002\u5408\uff0c\u600e\u4e48\u53bb\u52a0\u8f7d\u5176\u4ed6\u7684\u914d\u7f6e\u6587\u4ef6\u5462\u3002\u4e0b\u9762\u5148\u8bb2\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\uff0c\u5176\u5b9espringboot\u5e94\u8be5\u4e5f\u652f\u6301\u4ee5\u5176\u4ed6profile\u7684\u5f62\u5f0f\u53bb\u5265\u79bb\u914d\u7f6e\uff0c\u4f46\u662f\u76ee\u524d\u4ee5springboot-2.5.2\u8fd9\u5757\u8fd8\u5728\u7814\u7a76\u4e2d\uff0c\u540e\u7eed\u5982\u679c\u53ef\u4ee5\uff0c\u4f1a\u8865\u5145\u4e0a\u6765\u3002"]}),"\n",(0,r.jsxs)(t.h2,{id:"\u901a\u8fc7propertysource\u6ce8\u89e3",children:["\u901a\u8fc7",(0,r.jsx)(t.code,{children:"@PropertySource"}),"\u6ce8\u89e3"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5148\u6765\u770b\u4e0b",(0,r.jsx)(t.code,{children:"@PropertySource"}),"\u6e90\u7801"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Repeatable(PropertySources.class)\npublic @interface PropertySource {\n    /**\n     * \u8d44\u6e90\u7684\u540d\u79f0\n     */\n    String name() default "";\n    /**\n     * \u8d44\u6e90\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u6570\u636e\u591a\u4e2a\u6587\u4ef6\u5730\u5740\n     * \u53ef\u4ee5\u662fclasspath\u5730\u5740\u5982\uff1a\n     *                  "classpath:/com/myco/app.properties"\n     * \u4e5f\u53ef\u4ee5\u662f\u5bf9\u5e94\u7684\u6587\u4ef6\u7cfb\u7edf\u5730\u5740\u5982\uff1a\n     *                  "file:/path/to/file"\n     */\n    String[] value();\n    /**\n     * \u662f\u5426\u5ffd\u7565\u6587\u4ef6\u8d44\u6e90\u662f\u5426\u5b58\u5728\uff0c\u9ed8\u8ba4\u662ffalse,\u4e5f\u5c31\u662f\u8bf4\u914d\u7f6e\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\u5730\u5740spring\u542f\u52a8\u5c06\u4f1a\u62a5\u9519\n     */\n    boolean ignoreResourceNotFound() default false;\n    /**\n     * \u8fd9\u4e2a\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\u4e86\u5c31\u662f\u5bf9\u5e94\u7684\u5b57\u7b26\u7f16\u7801\u4e86\uff0c\u9ed8\u8ba4\u662f\u7a7a\u503c\uff0c\u5982\u679c\u914d\u7f6e\u6587\u4ef6\u4e2d\u6709\u4e2d\u6587\u5e94\u8be5\u8bbe\u7f6e\u4e3autf-8     */\n    String encoding() default "";\n    /**\n     * \u5173\u952e\u7684\u5143\u7d20\u4e86 \u8bfb\u53d6\u5bf9\u5e94\u8d44\u6e90\u6587\u4ef6\u7684\u5de5\u5382\u7c7b\u4e86 \u9ed8\u8ba4\u7684\u662fPropertySourceFactory\n     */\n    Class<? extends PropertySourceFactory> factory() default PropertySourceFactory.class;\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u5bf9\u4e8e",(0,r.jsx)(t.code,{children:"@PropertySource"}),",\u5b98\u65b9\u7684\u4f7f\u7528\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5728\u4e00\u4e2a",(0,r.jsx)(t.code,{children:"@Configuration"}),"\u6807\u6ce8\u7684\u7c7b\u4e0a\u52a0\u4e0a\u8be5\u6ce8\u89e3\uff0c\u5e76\u8bbe\u7f6evalue\u5c5e\u6027\u7b49\u3002\u5b9e\u6d4b",(0,r.jsx)(t.code,{children:"@Component"}),"\u4e5f\u53ef\u4ee5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u52a0\u4e0a\u8be5\u6ce8\u89e3\u540e\uff0c\u5373\u53ef\u901a\u8fc7",(0,r.jsx)(t.code,{children:"Environment"}),"#",(0,r.jsx)(t.code,{children:"getProperty"}),"\u83b7\u53d6\u76f8\u5173\u7684\u914d\u7f6e\u5c5e\u6027\u3002\u540c\u65f6\u4e5f\u53ef\u4ee5\u8fdb\u884c\u5c5e\u6027\u7ed1\u5b9a\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"value"}),"\u7684\u5c5e\u6027\u503c\u652f\u6301",(0,r.jsx)(t.code,{children:"${}"}),"placeholde\u683c\u5f0f\uff0c\u6240\u4ee5\u591a\u6587\u4ef6\u683c\u5f0f\u652f\u6301\u591aplaceholder\u5e76\u4ee5\u9017\u53f7\u5206\u9694"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u914d\u7f6e\u591a\u4e2a\u6587\u4ef6\u800c\u4e14\u6587\u4ef6\u914d\u7f6e\u5c5e\u6027\u503c\u51b2\u7a81\uff0c\u5c06\u4ee5\u6700\u540e\u4e00\u4e2a\u914d\u7f6e\u7684\u4e3a\u51c6"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u9ed8\u8ba4\u7684",(0,r.jsx)(t.code,{children:"PropertySourceFactory"}),"\u662fPropertySourceFactory\u7684\u5b50\u7c7b",(0,r.jsx)(t.code,{children:"DefaultPropertySourceFactory"}),"\u8be5\u5b50\u7c7b\u652f\u6301",(0,r.jsx)(t.code,{children:".xml"}),"\u548c",(0,r.jsx)(t.code,{children:".properties"}),"\u6587\u4ef6\u7684\u89e3\u6790\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5982\u679c\u9700\u8981\u652f\u6301\u5176\u4ed6\u6587\u4ef6\u683c\u5f0f\u4f8b\u5982Yaml\u6587\u4ef6\u89e3\u6790\uff0c\u9700\u8981\u81ea\u5b9a\u4e49\u89e3\u6790\u7c7b\u5e76\u5b9e\u73b0",(0,r.jsx)(t.code,{children:"PropertySourceFactory"}),"\u63a5\u53e3"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public class YamlPropertySourceFactory implements PropertySourceFactory {\n\n        @Override\n        public PropertySource<?> createPropertySource(String name, EncodedResource encodedResource)\n                throws IOException {\n            YamlPropertiesFactoryBean factory = new YamlPropertiesFactoryBean();\n            factory.setResources(encodedResource.getResource());\n            Properties properties = factory.getObject();\n            return new PropertiesPropertySource(encodedResource.getResource()\n                    .getFilename(), properties);\n        }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u90a3\u4e48\u4e3a\u4ec0\u4e48",(0,r.jsx)(t.code,{children:"@Component"}),"\u6216",(0,r.jsx)(t.code,{children:"@Configuration"}),"\u7c7b\u4e0a\u52a0\u4e0a",(0,r.jsx)(t.code,{children:"@PropertySource"}),"\u5c31\u53ef\u4ee5\u89e3\u6790\u4e86\u5462\uff1f"]}),"\n",(0,r.jsx)(t.p,{children:"Spring-boot\u542f\u52a8\u8fc7\u7a0b\u4e2d\u4f9d\u6b21\u8c03\u7528\u3002"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"AbstractApplicationContext"}),"#",(0,r.jsx)(t.code,{children:"refresh"}),"\u91cc\u7684",(0,r.jsx)(t.code,{children:"invokeBeanFactoryPostProcessors(beanFactory)"}),"\u65b9\u6cd5"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"protected void invokeBeanFactoryPostProcessors(ConfigurableListableBeanFactory beanFactory) {\n\t\tPostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(beanFactory, getBeanFactoryPostProcessors());\n\n\t\t// Detect a LoadTimeWeaver and prepare for weaving, if found in the meantime\n\t\t// (e.g. through an @Bean method registered by ConfigurationClassPostProcessor)\n\t\tif (!NativeDetector.inNativeImage() && beanFactory.getTempClassLoader() == null && beanFactory.containsBean(LOAD_TIME_WEAVER_BEAN_NAME)) {\n\t\t\tbeanFactory.addBeanPostProcessor(new LoadTimeWeaverAwareProcessor(beanFactory));\n\t\t\tbeanFactory.setTempClassLoader(new ContextTypeMatchClassLoader(beanFactory.getBeanClassLoader()));\n\t\t}\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(beanFactory, getBeanFactoryPostProcessors());"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public static void invokeBeanFactoryPostProcessors(\n\t\t\tConfigurableListableBeanFactory beanFactory, List<BeanFactoryPostProcessor> beanFactoryPostProcessors) {\n\n\t\t\t\t// \u7701\u7565\u90e8\u5206\u4ee3\u7801\n\t\t\t\tinvokeBeanDefinitionRegistryPostProcessors(currentRegistryProcessors, registry, beanFactory.getApplicationStartup());\n\t\t\t\tcurrentRegistryProcessors.clear();\n\t\t\t}\n\t\t\t// \u7701\u7565\u90e8\u5206\u4ee3\u7801\n\t}\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"invokeBeanDefinitionRegistryPostProcessors(currentRegistryProcessors, registry, beanFactory.getApplicationStartup());"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'private static void invokeBeanDefinitionRegistryPostProcessors(\n\t\t\tCollection<? extends BeanDefinitionRegistryPostProcessor> postProcessors, BeanDefinitionRegistry registry, ApplicationStartup applicationStartup) {\n\t\t\n    // \u8fd9\u91cc\u4f1a\u6267\u884cConfigurationClassPostProcessor#postProcessBeanDefinitionRegistry\n\t\tfor (BeanDefinitionRegistryPostProcessor postProcessor : postProcessors) {\n\t\t\tStartupStep postProcessBeanDefRegistry = applicationStartup.start("spring.context.beandef-registry.post-process")\n\t\t\t\t\t.tag("postProcessor", postProcessor::toString);\n\t\t\tpostProcessor.postProcessBeanDefinitionRegistry(registry);\n\t\t\tpostProcessBeanDefRegistry.end();\n\t\t}\n\t}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"ConfigurationClassPostProcessor#processConfigBeanDefinitions"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"ConfigurationClassParser#doProcessConfigurationClass"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'protected final SourceClass doProcessConfigurationClass(\n\t\t\tConfigurationClass configClass, SourceClass sourceClass, Predicate<String> filter)\n\t\t\tthrows IOException {\n\n\t\tif (configClass.getMetadata().isAnnotated(Component.class.getName())) {\n\t\t\t// Recursively process any member (nested) classes first\n\t\t\tprocessMemberClasses(configClass, sourceClass, filter);\n\t\t}\n\n\t\t// Process any @PropertySource annotations\n\t\tfor (AnnotationAttributes propertySource : AnnotationConfigUtils.attributesForRepeatable(\n\t\t\t\tsourceClass.getMetadata(), PropertySources.class,\n\t\t\t\torg.springframework.context.annotation.PropertySource.class)) {\n\t\t\tif (this.environment instanceof ConfigurableEnvironment) {\n\t\t\t\tprocessPropertySource(propertySource);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tlogger.info("Ignoring @PropertySource annotation on [" + sourceClass.getMetadata().getClassName() +\n\t\t\t\t\t\t"]. Reason: Environment must implement ConfigurableEnvironment");\n\t\t\t}\n\t\t}\n\n\t\t// Process any @ComponentScan annotations\n\t\tSet<AnnotationAttributes> componentScans = AnnotationConfigUtils.attributesForRepeatable(\n\t\t\t\tsourceClass.getMetadata(), ComponentScans.class, ComponentScan.class);\n\t\tif (!componentScans.isEmpty() &&\n\t\t\t\t!this.conditionEvaluator.shouldSkip(sourceClass.getMetadata(), ConfigurationPhase.REGISTER_BEAN)) {\n\t\t\tfor (AnnotationAttributes componentScan : componentScans) {\n\t\t\t\t// The config class is annotated with @ComponentScan -> perform the scan immediately\n\t\t\t\tSet<BeanDefinitionHolder> scannedBeanDefinitions =\n\t\t\t\t\t\tthis.componentScanParser.parse(componentScan, sourceClass.getMetadata().getClassName());\n\t\t\t\t// Check the set of scanned definitions for any further config classes and parse recursively if needed\n\t\t\t\tfor (BeanDefinitionHolder holder : scannedBeanDefinitions) {\n\t\t\t\t\tBeanDefinition bdCand = holder.getBeanDefinition().getOriginatingBeanDefinition();\n\t\t\t\t\tif (bdCand == null) {\n\t\t\t\t\t\tbdCand = holder.getBeanDefinition();\n\t\t\t\t\t}\n\t\t\t\t\tif (ConfigurationClassUtils.checkConfigurationClassCandidate(bdCand, this.metadataReaderFactory)) {\n\t\t\t\t\t\tparse(bdCand.getBeanClassName(), holder.getBeanName());\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t// Process any @Import annotations\n\t\tprocessImports(configClass, sourceClass, getImports(sourceClass), filter, true);\n\n\t\t// Process any @ImportResource annotations\n\t\tAnnotationAttributes importResource =\n\t\t\t\tAnnotationConfigUtils.attributesFor(sourceClass.getMetadata(), ImportResource.class);\n\t\tif (importResource != null) {\n\t\t\tString[] resources = importResource.getStringArray("locations");\n\t\t\tClass<? extends BeanDefinitionReader> readerClass = importResource.getClass("reader");\n\t\t\tfor (String resource : resources) {\n\t\t\t\tString resolvedResource = this.environment.resolveRequiredPlaceholders(resource);\n\t\t\t\tconfigClass.addImportedResource(resolvedResource, readerClass);\n\t\t\t}\n\t\t}\n\n\t\t// Process individual @Bean methods\n\t\tSet<MethodMetadata> beanMethods = retrieveBeanMethodMetadata(sourceClass);\n\t\tfor (MethodMetadata methodMetadata : beanMethods) {\n\t\t\tconfigClass.addBeanMethod(new BeanMethod(methodMetadata, configClass));\n\t\t}\n\n\t\t// Process default methods on interfaces\n\t\tprocessInterfaces(configClass, sourceClass);\n\n\t\t// Process superclass, if any\n\t\tif (sourceClass.getMetadata().hasSuperClass()) {\n\t\t\tString superclass = sourceClass.getMetadata().getSuperClassName();\n\t\t\tif (superclass != null && !superclass.startsWith("java") &&\n\t\t\t\t\t!this.knownSuperclasses.containsKey(superclass)) {\n\t\t\t\tthis.knownSuperclasses.put(superclass, configClass);\n\t\t\t\t// Superclass found, return its annotation metadata and recurse\n\t\t\t\treturn sourceClass.getSuperClass();\n\t\t\t}\n\t\t}\n\n\t\t// No superclass -> processing is complete\n\t\treturn null;\n\t}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"ConfigurationClassParser#processPropertySource"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'private void processPropertySource(AnnotationAttributes propertySource) throws IOException {\n\t\tString name = propertySource.getString("name");\n\t\tif (!StringUtils.hasLength(name)) {\n\t\t\tname = null;\n\t\t}\n\t\tString encoding = propertySource.getString("encoding");\n\t\tif (!StringUtils.hasLength(encoding)) {\n\t\t\tencoding = null;\n\t\t}\n\t\tString[] locations = propertySource.getStringArray("value");\n\t\tAssert.isTrue(locations.length > 0, "At least one @PropertySource(value) location is required");\n\t\tboolean ignoreResourceNotFound = propertySource.getBoolean("ignoreResourceNotFound");\n\n\t\tClass<? extends PropertySourceFactory> factoryClass = propertySource.getClass("factory");\n\t\tPropertySourceFactory factory = (factoryClass == PropertySourceFactory.class ?\n\t\t\t\tDEFAULT_PROPERTY_SOURCE_FACTORY : BeanUtils.instantiateClass(factoryClass));\n\n\t\tfor (String location : locations) {\n\t\t\ttry {\n\t\t\t\tString resolvedLocation = this.environment.resolveRequiredPlaceholders(location);\n\t\t\t\tResource resource = this.resourceLoader.getResource(resolvedLocation);\n\t\t\t\taddPropertySource(factory.createPropertySource(name, new EncodedResource(resource, encoding)));\n\t\t\t}\n\t\t\tcatch (IllegalArgumentException | FileNotFoundException | UnknownHostException | SocketException ex) {\n\t\t\t\t// Placeholders not resolvable or resource not found when trying to open it\n\t\t\t\tif (ignoreResourceNotFound) {\n\t\t\t\t\tif (logger.isInfoEnabled()) {\n\t\t\t\t\t\tlogger.info("Properties location [" + location + "] not resolvable: " + ex.getMessage());\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tthrow ex;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u91cc\u6709\u4e24\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u65b9\u6cd5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"// ApplicationServeletEnvironment\n// \u8fd9\u91cc\u53bb\u89e3\u6790placeholder\nString resolvedLocation = this.environment.resolveRequiredPlaceholders(location);\n//org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplic//ationContext\n// \u8fd9\u91cc\u53bb\u83b7\u53d6resource \u4f8b\u5982 file:xxx,classpath:xxx\nResource resource = this.resourceLoader.getResource(resolvedLocation);\n// \u628apropertyResource\u6dfb\u52a0\u5230Environment\u4e2d\u7684MutablePropertySources\naddPropertySource(factory.createPropertySource(name, new EncodedResource(resource, encoding)));\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e0a\u9762\u7684\u6d41\u7a0b\u8d70\u5b8c\u5c31\u628aPropertiesPropertySource\u6dfb\u52a0\u5230Environment\u4e2d\u4e86\uff0c\u6700\u540e\u53ea\u9700\u8981\u6309\u9700\u83b7\u53d6\u6216\u7ed1\u5b9a\u5c5e\u6027\u5c31\u884c\u4e86\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u901a\u8fc7environmentpostprocessor\u8bbe\u7f6e",children:"\u901a\u8fc7EnvironmentPostProcessor\u8bbe\u7f6e"}),"\n",(0,r.jsx)(t.h3,{id:"1\u7f16\u5199\u7c7b\u5b9e\u73b0\u8be5\u63a5\u53e3",children:"1.\u7f16\u5199\u7c7b\u5b9e\u73b0\u8be5\u63a5\u53e3"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// \u8fd9\u91cc\u914d\u7f6e\u5728\u6700\u540e\u6267\u884c\n@Order(Ordered.LOWEST_PRECEDENCE)\npublic class MyEnvironmentPostProcessor implements EnvironmentPostProcessor {\n\n    @Override\n    public void postProcessEnvironment(ConfigurableEnvironment environment,\n                                       SpringApplication application) {\n\t\t\t\t\n        YamlPropertiesFactoryBean yaml = new YamlPropertiesFactoryBean();\n        // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u83b7\u53d6files\u8def\u5f84\uff0c\u8fd9\u91cc\u53ef\u4ee5\u914d\u7f6e\u5728application.yaml\u4e2d\u6216\u73af\u5883\u53d8\u91cf\u4e2d\n        String files = environment.getProperty("files");\n\t\t\t\t// \u6211\u4eec\u5728\u4e0a\u9762\u8bb2\u5230PropertyResource\u662f\u901a\u8fc7ResourceLoader\u52a0\u8f7d\u8d44\u6e90\u7684\n        // \u5305\u62ec\u5404\u79cd\u8def\u5f84\u8d44\u6e90file:xxx\u6216\u8005classpath:xxx \n        DefaultResourceLoader defaultResourceLoader = new DefaultResourceLoader();\n        Resource resource = defaultResourceLoader.getResource(files);\n      \t\n        yaml.setResources(resource);\n        MutablePropertySources propertySources = environment.getPropertySources();\n        propertySources.addFirst(new PropertiesPropertySource("Config", yaml.getObject()));\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"2\u914d\u7f6espringfactories-\u4f7fmyenvironmentpostprocessor\u751f\u6548",children:"2.\u914d\u7f6espring.factories \u4f7fMyEnvironmentPostProcessor\u751f\u6548"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728resource\u4e0b\u521b\u5efa",(0,r.jsx)(t.strong,{children:"META-INF"}),"\u6587\u4ef6\u5939\uff0c\u5728",(0,r.jsx)(t.strong,{children:"META-INF"}),"\u4e0b\u521b\u5efa",(0,r.jsx)(t.strong,{children:"spring.factories"}),"\uff0c\u5e76\u4e14\u5f15\u5165\u521a\u521a\u7f16\u5199\u7684",(0,r.jsx)(t.strong,{children:"MyEnvironmentPostProcessor"})," \u7c7b"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"org.springframework.boot.env.EnvironmentPostProcessor=MyEnvironmentPostProcessor\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u6837\u4e5f\u53ef\u4ee5\u914d\u7f6e\u8d44\u6e90\u6587\u4ef6\u4e86\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"3\u601d\u8003",children:"3.\u601d\u8003"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u901a\u8fc7environmentPostProcessor\u7684\u8d44\u6e90\u6587\u4ef6\u5982\u4f55\u52a8\u6001\u8bbe\u7f6e\u5462"}),"\n",(0,r.jsx)(t.li,{children:"environmentPostProcessor\u7684\u539f\u7406\u662f\u5565\uff0c\u662f\u600e\u4e48\u52a8\u6001\u8c03\u7528\u7684"}),"\n",(0,r.jsxs)(t.li,{children:["spring\u4e2dresourceLoader\u6709\u54ea\u4e9b\uff0c\u662f\u600e\u4e48\u52a8\u6001\u5904\u7406\u4e0d\u540c\u7684\u8d44\u6e90\u7684\u3002",(0,r.jsx)(t.code,{children:"DefaultResourceLoader"}),"\u662f\u600e\u4e48\u505a\u5230\u7684\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);