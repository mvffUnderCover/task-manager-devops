package com.taskapi;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;


@SpringBootTest(classes = TaskApiApplication.class)
@ActiveProfiles("test")
class TaskApiApplicationTests {

	@Test
	void contextLoads() {
	}

}
